const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'zgq' && user.password === 'zgq1') {
    ctx.session.user = {
      username: 'zgq'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'zgq'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password err'
    }
  }
})

module.exports = userRouter
