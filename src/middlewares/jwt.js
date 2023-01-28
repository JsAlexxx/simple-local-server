'use strict'

const jwt = require('jsonwebtoken')
const config = require('../utils/config')
module.exports = {
  /**
  * 获取用户token
  * @param {string} data  加密信息
  * @return {string} 返回生成的Token
  */
  signToken: data => {
    try {
      return jwt.sign({
        data
      }, config.security.secretKey, { expiresIn: config.security.expiresIn })
    } catch (err) {
      throw { code: 401, message: err.message }
    }
  },

  /**
   * 验证用户token值
   * @static
   * @param {string} token 用户token
   * @return {*}  {Object}
   */

  verifyToken: (ctx, next) => {
    try {
      const token = ctx.request.headers.authorization.slice(7)
      return jwt.verify(token, config.security.secretKey)
    } catch (err) {
      throw { code: 401, message: err.message }
    }
  }
}
