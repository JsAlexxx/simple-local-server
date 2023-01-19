// const userControllers = require('./userController')
const homeController = require('./homeController')
const appController = require('./appController')
const userController = require('./userController')
const signController = require('./signController')

const controllers = {
  homeController,
  appController,
  userController,
  signController
}

module.exports = controllers