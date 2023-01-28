require('module-alias/register')

'use strict'
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const corsConfig = require('./src/middlewares/cors')
// const { logInfo } = require('./src/middlewares/logger')
const {success, error} = require('./src/middlewares/response')

const MongoConnect = require('./src/database/')
MongoConnect()

const router = require('./src/router/index')

const config = require('./src/utils/config')

const app = new Koa()

// app.use(logInfo)
app.use(error)
app.use(bodyParser())
app.use(cors(corsConfig))

router.forEach(router => {
  app.use(router.routes(), router.allowedMethods())
})

app.use(success)
module.exports = app

app.listen(config.port)