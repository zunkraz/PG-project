const {Router} = require("express");
const router = Router();
const passport = require('passport');
const roleAuth = require('../controllers/auth/roleAuth');
const {getTips, postTips} = require('../controllers/index.js');

router.get('/',(req,res,next)=>{
  getTips()
    .then(result => res.json(result))
    .catch(err => next(err))
});
//passport.authenticate('jwt', {session: false}),
router.post('/',  (req, res, next) => {
  const text = req.body;
  postTips(text)
    .then(result => res.json(result))
    .catch(err => next(err))
});

module.exports = router;
