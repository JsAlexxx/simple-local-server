const singinRouter = require('koa-router')()

const {signController} = require('@/src/controllers/')
const {signin,signup} = signController

singinRouter.post('/user/signin',signin)
singinRouter.post('/user/signup',signup)

module.exports = singinRouter

