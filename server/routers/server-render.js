const ejs = require('ejs')


module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Type'] = 'text/html'

  const context = { url: ctx.path, user: ctx.session.user }

  try {
    console.log('testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest')
    console.log('context', context)
    const appString = await renderer.renderToString(context)

    const { title } = context.meta.inject()

    console.log('(((((((((((((((((((((((((((((((((((((((((((((((((')
    console.log('appString', appString)
    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
      title: title.text(),
      initalState: context.renderState()
    })
    ctx.body = html
  } catch (err) {
    console.log('render err', err)
    throw err
  }
}
