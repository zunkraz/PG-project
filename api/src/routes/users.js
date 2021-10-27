const router = require ('express').Router();
const {userCreate} = require('../controllers/index')

router.post('/', userCreate)

module.exports = router;