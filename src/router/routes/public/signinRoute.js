const singinRouter = require('koa-router')()

const {signController} = require('@/src/controllers/')

singinRouter.post('/user/signin',signController)

module.exports = singinRouter

