const router = require('express').Router()
const { getAllProfs, getProfByUsername } = require('../controllers/index.js') //aquí se requieren todas las funciones controladoras, que están guardadas en la carpeta controllersfunctions

//esta ruta es : /profesionales

router.get('/', getAllProfs)
router.get('/:username', getProfByUsername)

module.exports = router