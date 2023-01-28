const mongoose = require('mongoose');
const config = require('../utils/config')

const {host, port, dbName} = config.database
const dbPath = `mongodb://${host}:${port}/${dbName}`

module.exports = () => {
  mongoose.connect(dbPath).then(() => {
    console.log('数据库连接成功');
  }).catch(err => {
    console.log(err)
  })
}