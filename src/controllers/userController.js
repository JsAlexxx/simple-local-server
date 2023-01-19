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
  }
  return next()
}


module.exports = {
  getUserInfo
}
