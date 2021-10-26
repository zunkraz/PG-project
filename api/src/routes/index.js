const { Router } = require('express')
const router = Router()

//Aquí importamos todas las rutas, solo puse un ejemplo
const professionals = require('./professionals')

router.use('/professionals', professionals)

module.exports = router