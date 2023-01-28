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

const createPieChartData = (categories) => {
  const pieChartDataRes = []
  categories.forEach(item => {
    const pieChartDataItem = {}
    pieChartDataItem.name = item
    pieChartDataItem.value = _.random(1000,8000).toString()
    pieChartDataRes.push(pieChartDataItem)
  });
  return pieChartDataRes
}


const pieChartData = createPieChartData(categories)
// console.log(pieChartData);

module.exports = pieChartData