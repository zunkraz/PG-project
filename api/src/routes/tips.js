const {Router} = require("express");
const router = Router();
const {getTips} = require('../controllers/index.js');

router.get('/',(req,res,next)=>{
  getTips()
    .then(result => res.json(result))
    .catch(err => next({message: err}));
});

module.exports = router;