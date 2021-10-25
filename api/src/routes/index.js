const { Router } = require('express')
const router = Router()

//Aquí importamos todas las rutas, solo puse un ejemplo
const profesionales = require('./profesionales')

router.use('/profesionales', profesionales)

module.exports = router