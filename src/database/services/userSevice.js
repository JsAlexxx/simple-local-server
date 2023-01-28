const userModel = require('../models/userModel')

const UserService = {
  /**
   *
   * @param {Object} user
   */
  async createUser(user) {
    return await userModel.create(user)
  },

  /**
   *
   * @param {String} username
   */
  async delUserByName(username) {
    return await userModel.deleteOne({ username })
  },

  /**
   *
   * @param {String} username
   * @param {Object} newUserVal
   */
  async updateUserByName(username, newUserVal) {
    return await userModel.updateOne({ username }, newUserVal)
  },

  async getAllUser() {
    return await userModel.find({})
  },

  /**
   *
   * @param {String} username
   * @returns
   */
  async getUserByName(username) {
    return await userModel.findOne({ username })
  }
}

module.exports = UserService
