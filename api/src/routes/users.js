const router = require ('express').Router();
const { userCreate, getUsersToForm, userDelete, userUpdate, getUserFullInfo } = require('../controllers/index')

router.post('/', (req, res, next) => {
    const body = req.body;
    userCreate(body)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/', (req, res, next) => {
    getUsersToForm()
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/:username', (req, res, next) => {
    const {username} = req.params;
    getUserFullInfo(username)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.delete('/:username',(req,res,next)=>{
    let {username} = req.params;
    userDelete(username)
      .then(result => res.json(result))
      .catch(err => next(err))
});

router.put ('/:username',(req,res,next)=>{
    let {username} = req.params
    let updateInfo = req.body
    userUpdate(username,updateInfo)
      .then(result => res.json(result))
      .catch(err => next(err))
});

module.exports = router; 