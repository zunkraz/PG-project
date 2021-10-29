const {Router} = require("express");
const router = Router();
const {getTips, postTips} = require('../controllers/index.js');

router.get('/',(req,res,next)=>{
  getTips()
    .then(result => res.json(result))
    .catch(err => next({message: err}));
});

router.post('/', (req, res, next) => {
  const text = req.body;
  postTips(text)
    .then(result => res.json(result))
    .catch(err => next(err))
});

module.exports = router; 