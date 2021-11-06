//admin routes
const {Router} = require("express");
const router = Router();
const passport = require('passport');
const roleAuth = require('../controllers/auth/roleAuth');
const {
  getAllUsersAdmin,
  userDelete,
  userUpdate,
  appointmentDelete,
  appointmentUpdate,
  categoryCreate,
  categoryUpdate,
  categoryDelete,
  postTips,
  tipUpdate,
  tipDelete
} = require('../controllers/index.js');

//GET ALL USERS
router.get('/users', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  getAllUsersAdmin()
    .then(result => res.json(result))
    .catch(err => next(err));
});
//USER DELETE
router.delete('/users/:username', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {username} = req.params;
  userDelete(username)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//USER UPDATE
router.put('/users/:username', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {username} = req.params;
  let updateInfo = req.body;  // {name,email,password,isAdmin,etc} = req.body
  userUpdate(username,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//APPOINTMENT DELETE
router.delete('/appointment/:id', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {id} = req.params;
  appointmentDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//APPOINTMENT UPDATE
router.put('/appointment/:id', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;   // {date,status,etc} = req.body
  appointmentUpdate(id,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//CATEGORY CREATE
router.post('/category', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let newCategory = req.body;
  categoryCreate(newCategory)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//CATEGORY UPDATE
router.put('/category/:id', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;   // {name,img,searchCount,etc} = req.body
  categoryUpdate(id,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//CATEGORY DELETE
router.delete('/category/:id', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {id} = req.params;
  categoryDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//TIP CREATE
router.post('/tips', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {text} = req.body;
  postTips({text,isApproved:true})
    .then(result => res.json(result))
    .catch(err => next(err));
});
//TIP UPDATE
router.put('/tips/:id', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;
  tipUpdate(id,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//TIP DELETE
router.delete('/tips/:id', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {id} = req.params;
  tipDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;
