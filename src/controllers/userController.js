'use strict'

const jwt = require('../middlewares/jwt')

const getUserInfo = async (ctx, next) => {
  const tokenDecoded = jwt.verifyToken(ctx)
  if (tokenDecoded) {
    const { username, role} = tokenDecoded.data
    ctx.result = {
      username,
      role
    }
  } else {
    ctx.msg = 'token已过期，请重新登录'
  }
  return next()
}


module.exports = {
  getUserInfo
}
