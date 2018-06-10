const Router = require('koa-router')
const asios = require('axios')
const MemoryFS = require('memory-fs')
const fs = require('fs')
const ejs = require('ejs')
const webpack = require('webpack')
const path = require('path')
const VueServerRenderer = require('vue-server-renderer')

const serverConfig = require('../../build/webpack.config.server')

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
  stats.hasWarnings.forEach(err => console.warn(err))

  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )

  bundle = JSON.parse(mfs.readFileSync(bundlePath, options, 'utf-8'))
})

// node bundle
const handleSSR = async (ctx) => {
  if (bundle) {
    ctx.body = 'wait a mini'
    return
  }

  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8000/vue-ssr-client-manifest.json'
  )

  const clientManifest = clientManifestResp.data

  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs')
  )

  const renderer = VueServerRenderer.createBundleRender(bundle, {
    inject: false,
    clientManifest
  })
}
