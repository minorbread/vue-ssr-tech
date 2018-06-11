const ejs = require('ejs')


module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Type'] = 'text/html'

  const context = { url: ctx.path }

  try {
    console.log('testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest')
    console.log('context', context)
    const appString = await renderer.renderToString(context)

    console.log('(((((((((((((((((((((((((((((((((((((((((((((((((')
    console.log('appString', appString)
    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts()
    })
    ctx.body = html
  } catch (err) {
    console.log('render err', err)
    throw err
  }
}
