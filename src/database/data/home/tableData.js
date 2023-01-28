const _ = require('lodash')

const categories = [
  "oppo",
  "vivo",
  "apple",
  "xiaomi",
  "samsung",
  "huawei",
  "meizu"
]
const createTableData = (categories) => {
  const tableData = []
  categories.forEach(item => {
    const TableDataItem = {}
    TableDataItem.name = item
    TableDataItem.dailySold = _.random(100, 1000).toString()
    TableDataItem.monthlySold = _.random(1000, 3000).toString()
    TableDataItem.total = _.random(3000, 10000).toString()
    tableData.push(TableDataItem)
  })
  return tableData
}

const tableData = createTableData(categories)

module.exports = tableData