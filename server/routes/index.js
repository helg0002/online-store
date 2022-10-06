const Router = require('express')
const router = new Router()
const deviceRouter = require('../routes/deviceRouter')
const brandRouter = require('../routes/brandRouter')
const typeRouter = require('../routes/typeRouter')
const userRouter = require('../routes/userRouter')

router.use('/user', userRouter)
router.use("/type", typeRouter)
router.use("/brand", brandRouter)
router.use('/device', deviceRouter)

module.exports = router