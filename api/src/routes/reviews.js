const {Router} = require("express");
const router = Router();
const {getReviews, postReview} = require('../controllers/index.js');

router.get('/',(req,res,next)=>{
  getReviews()
    .then(result => res.json(result))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const body = req.body;
  postReview(body)
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;