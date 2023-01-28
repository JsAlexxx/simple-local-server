const _ = require('lodash')

const week = [
  "周一","周二","周三","周四","周五","周六","周日"
]

const createColumnChartData = (week) => {
  const columnChartDataRes = []
  for(let i = 0; i < week.length; i++) {
    const columnChartDataItem = {}
    columnChartDataItem.date = week[i]
    columnChartDataItem.new = _.random(10,100).toString()
    columnChartDataItem.active = _.random(500, 1000).toString()
    columnChartDataRes.push(columnChartDataItem)
  }
  return columnChartDataRes
}

const columnChartData = createColumnChartData(week)
// console.log(columnChartData);

module.exports = columnChartData