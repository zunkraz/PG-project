const {Router} = require("express");
const router = Router();
const passport = require('passport');
const {getReviews, postReview, deleteReview} = require('../controllers/index.js');

router.get('/',(req,res,next)=>{
  getReviews()
    .then(result => res.json(result))
    .catch(err => next(err));
});

router.post('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  const body = req.body;
  postReview(body)
    .then(result => res.json(result))
    .catch(err => next(err));
});

router.delete('/:id', passport.authenticate('jwt', {session: false}), (req,res,send) => {
  const param = req.params.id
  deleteReview(param)
    .then(result=> res.json(result))
    .catch(err=>next(err))
})

module.exports = router;