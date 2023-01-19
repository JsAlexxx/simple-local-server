'use strict'

// -------------公共路由(无需token校验)-----------------------
const signRouter = require('./routes/public/signinRoute')

// --------------私有路由(需token校验)----------------------
const homeRouter = require('./routes/private/homeRoute')
const appRouter = require('./routes/private/appRoute')
const userRouter = require('./routes/private/userRoute')

const routers = [
  signRouter,
  homeRouter,
  appRouter,
  userRouter
]

routers.forEach(router => {
  router.prefix('/api')
})


module.exports = routers
