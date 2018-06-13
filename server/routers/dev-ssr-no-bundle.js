const Router = require('koa-router')
const axios = require('axios')
const MemoryFS = require('memory-fs')
const fs = require('fs')
const ejs = require('ejs')
const webpack = require('webpack')
const path = require('path')
const VueServerRenderer = require('vue-server-renderer')

const serverRender = require('./server-render-no-bundle')
const serverConfig = require('../../build/webpack.config.server')

const NativeModule = require('module')
const vm = require('vm')

const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFS()

serverCompiler.outputFileSystem = mfs

let bundle
// webpack
serverCompiler.watch({}, (err, stats) => {
  if (err) {
    throw err
  }
  stats = stats.toJson()
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(err => console.warn(err))

  const bundlePath = path.join(
    serverConfig.output.path,
    'server-entry.js'
  )

  // delete require.cache[bundlePath]
  // bundle = require('../../server-build/server-entry.js').default

  // function (module, exports, require)
  try {
    const m = { exports: {} }
    const bundleStr = mfs.readFileSync(bundlePath, 'utf-8')
    const wrapper = NativeModule.wrap(bundleStr)
    const script = new vm.Script(wrapper, {
      filename: 'server-entry.js',
      displayErrors: true
    })
    const result = script.runInThisContext()
    result.call(m.exports, m.exports, require, m)
    bundle = m.exports.default
  } catch (err) {
    console.log('compile js error:', err)
  }


  console.log('new bundle generated')
})

// node bundle
const handleSSR = async (ctx) => {
  if (!bundle) {
    ctx.body = 'wait a mini'
    return
  }

  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8000/vue-ssr-client-manifest.json'
  )

  // console.log('-----------------------------')
  // console.log('clientManifestResp',clientManifestResp)
  const clientManifest = clientManifestResp.data

  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8'
  )
  // console.log('+++++++++++++++++++++++++')
  // console.log('template', template)
  const renderer = VueServerRenderer.createRenderer({
    inject: false,
    clientManifest
  })
  // console.log('=========================')
  // console.log('renderer', renderer)

  await serverRender(ctx, renderer, template, bundle)
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router
