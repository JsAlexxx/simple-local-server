'use strict'

const fs = require('fs')
const path = require('path')
const log4js = require('log4js')
const config = require('../utils/config')

const logsDir = path.parse(config.logPath).dir
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

log4js.configure({
  appenders: {
    console: { type: 'console' },
    dateFile: { type: 'dateFile', filename: config.logPath, pattern: '-yyyy-MM-dd' },
  },
  categories: {
    default: {
      appenders: ['console', 'dateFile'],
      level: 'info'
    }
  },
  pm2: true
})

const logger = log4js.getLogger('[Default]')
logger.level = config.logLevel;


module.exports = {
  logInfo: async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    const remoteAddress = ctx.headers['x-forwarded-for'] || ctx.ip || ctx.ips ||
      (ctx.socket && (ctx.socket.remoteAddress || (ctx.socket.socket && ctx.socket.socket.remoteAddress)))
    const logText = `${ctx.method} ${ctx.status} ${ctx.url} 请求参数： ${JSON.stringify(ctx.request.body)} 响应参数： ${JSON.stringify(ctx.body)} - ${remoteAddress} - ${ms}ms`
    logger.info(logText)
  },
  logger
}
