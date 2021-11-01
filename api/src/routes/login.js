const router = require('express').Router()
const getLogin = require('../controllers/functions/getLogin');

//esta ruta es : /login

router.get('/', getLogin)
//ruta de query para verificar login se envía como: 
//  /login?username=noheliajoeliana&password=1234

module.exports = router