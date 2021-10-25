const router = require('express').Router()
const { funcion1,funcion2 } = require('./../controllers/index.js') //aquí se requieren todas las funciones controladoras, que están guardadas en la carpeta controllersfunctions

//esta ruta es : /profesionales

router.get('/', funcion1)

module.exports = router