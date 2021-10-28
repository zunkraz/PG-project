const router = require ('express').Router();
const {userCreate, getUsersToForm } = require('../controllers/index')

router.post('/', userCreate)
router.get('/', getUsersToForm)

module.exports = router;