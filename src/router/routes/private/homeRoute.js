const homeRouter = require('koa-router')()

const {homeController} = require('@/src/controllers/')
const {getHomeData} = homeController

homeRouter.get('/home', getHomeData)

module.exports = homeRouter

