const appRouter = require('koa-router')()

const {appController} = require('@/src/controllers/')
const {getAppData} = appController


appRouter.get('/app', getAppData)

module.exports = appRouter

