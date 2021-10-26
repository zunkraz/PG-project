const { Router } = require('express')
const router = Router()

//Aquí importamos todas las rutas, solo puse un ejemplo
const professionals = require('./profesionales');
const users = require('./users');

router.use('/profesionales', professionals)
router.use('/users', users);


module.exports = router