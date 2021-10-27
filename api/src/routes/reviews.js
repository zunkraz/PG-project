const {Router} = require("express");
const router = Router();
const {getReviews} = require('../controllers/index.js');

router.get('/',(req,res,next)=>{
  getReviews()
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;