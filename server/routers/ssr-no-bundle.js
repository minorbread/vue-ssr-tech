const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const VueServerRenderer = require('vue-server-renderer')
const bundle = require('../../server-build/server-entry.js').default

const serverRender = require('./server-render-no-bundle.js')

const clientManifest = require('../../public/vue-ssr-client-manifest.json')

const renderer = VueServerRenderer.createRenderer(
  {
    inject: false,
    clientManifest
  }
)

const pageRouter = new Router()

const template = fs.readFileSync(
  path.join(__dirname, '../server.template.ejs'),
  'utf-8'
)


pageRouter.get('*', async (ctx) => {
  await serverRender(ctx, renderer, template, bundle)
})
module.exports = pageRouter
