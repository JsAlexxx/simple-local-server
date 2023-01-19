'use strict'

const jwt = require('../middlewares/jwt')
const userService = new require('../database/services/userSevice')

const signin = async (ctx, next) => {
  const { username, password } = ctx.request.body

  const matchedUser = await userService.getUserByName(username)

  if (!matchedUser) {
    ctx.result = ''
    ctx.msg = '用户名或密码错误'
  } else if (matchedUser && matchedUser.password !== password) {
    ctx.result = ''
    ctx.msg = '用户名或密码错误'
  } else {
    ctx.result = jwt.signToken({username, role: matchedUser.role})
  }
  return next()
}

module.exports = signin