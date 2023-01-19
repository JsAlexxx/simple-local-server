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

function createLineChatData(categories) {
  const createDate = (year,month,startDay) => {
    const dateRes = []
    let day = startDay
    for(let i = 0; i < 7; i++) {
      const dateItem = `${year}-${month}-${day}`
      day++
      dateRes.push(dateItem)
    }
    return dateRes
  }
  const dateRes = createDate(2022,12,12)

  const createSoldNumber = (categories) => {
    const res = []
    for(let i = 0; i < categories.length; i++) {
      const itemName = categories[i]
      const resItem = {}
      resItem[itemName] = []
      res.push(resItem)
      for (let i = 0; i < dateRes.length; i++) {
        resItem[itemName].push(_.random(1000,10000))
      }
    }
    return res
  }
  const SoldNumberRes = createSoldNumber(categories)

  const lineChartDataRes = {
    SoldNumberRes,
    dateRes
  }
  return lineChartDataRes
}

const lineChartData = createLineChatData(categories)

module.exports = lineChartData