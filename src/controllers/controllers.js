const {Router} = require ('express')
const route =Router()
const router = require('../routes/Routes')

route.get('/', router.get)



module.export=route