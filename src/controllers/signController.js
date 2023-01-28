'use strict'

const jwt = require('../middlewares/jwt')
const userService = require('../database/services/userSevice')
const { v4: uuidv4 } = require('uuid');

const signin = async (ctx, next) => {
  console.log(ctx.request.body);
  const { username, password } = ctx.request.body

  const matchedUser = await userService.getUserByName(username)

  if (!matchedUser) {
    ctx.msg = '用户名或密码错误'
  } else if (matchedUser && matchedUser.password !== password) {
    ctx.msg = '用户名或密码错误'
  } else {
    ctx.msg = '登录成功'
    ctx.result = jwt.signToken({ username, role: matchedUser.role })
  }
  return next()
}

const signup = async (ctx, next) => {
  console.log(ctx.request.body);
  const userInfo = ctx.request.body
  await userService.createUser(userInfo).then(res => {
    console.log('reg success');
    ctx.msg = '注册成功'
  }).catch(res => {
    ctx.msg = '注册失败，请稍后重试或询问管理员'
  })
  return next()
}

module.exports = {
  signin,
  signup
}