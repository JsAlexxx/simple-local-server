const {asideMenu} = require('../database/data/dataIndex')

const getAppData = async (ctx, next) => {
  const result = asideMenu
  ctx.result = result
  return next()
}

module.exports = {
  getAppData
}