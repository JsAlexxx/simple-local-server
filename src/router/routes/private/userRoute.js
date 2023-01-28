const userRouter = require('koa-router')()

const {userController} = require('@/src/controllers/')
const {getUserInfo} = userController

userRouter.get('/user/info', getUserInfo)

module.exports = userRouter
