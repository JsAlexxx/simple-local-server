const {homeData} = require('../database/data/dataIndex')

const getHomeData = async (ctx, next) => {
  const result = homeData
  ctx.result = result
  return next()
}

module.exports = {
  getHomeData
}