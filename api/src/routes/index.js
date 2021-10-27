const { Router } = require('express');
const router = Router();

//Aquí importamos todas las rutas, solo puse un ejemplo
const professionals = require('./professionals');
const tips = require('./tips');
const users = require('./users');

router.use('/tips',tips);
router.use('/professionals', professionals);
router.use('./users', users);

module.exports = router;