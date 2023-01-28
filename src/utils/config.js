'use strict'
const path = require('path')

module.exports = {
  port: '8000',

  database: {
    dbName: 'mydb',
    host: '127.0.0.1',
    port: '27017',
  },

  security: {
    secretKey: '2022',
    expiresIn: 60 * 60 * 24 * 30
  },

  logPath: path.resolve(__dirname, '../logs/koa-template.log'),
  logLevel: 'info'
}