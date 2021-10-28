const {Router} = require("express");
const router = Router();
const {getCategories,updateCategCount} = require('../controllers/index.js');

router.get('/',(req,res,next)=>{
  getCategories()
    .then(result => res.json(result))
    .catch(err => next(err));
});

router.put('/',(req,res,next)=>{
  let data = req.body;
  updateCategCount(data)
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;