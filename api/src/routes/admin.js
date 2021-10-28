//admin routes
const {Router} = require("express");
const router = Router();
const {
  userDelete,
  userUpdate,
  appointmentDelete,
  appointmentUpdate,
  categoryCreate,
  categoryUpdate,
  categoryDelete
} = require('../controllers/index.js');

//USER DELETE
router.delete('/user/:username',(req,res,next)=>{
  let {username} = req.params;
  userDelete(username)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//USER UPDATE
router.put ('/user/:username',(req,res,next)=>{
  let {username} = req.params;
  let updateInfo = req.body;  // {name,email,password,isAdmin,etc} = req.body
  userUpdate(username,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//APPOINTMENT DELETE
router.delete('/appointment/:id',(req,res,next)=>{
  let {id} = req.params;
  appointmentDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//APPOINTMENT UPDATE
router.put ('/appointment/:id',(req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;   // {date,status,etc} = req.body
  appointmentUpdate(id,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//CATEGORY CREATE
router.post('/category', (req,res,next)=>{
  let newCategory = req.body;
  categoryCreate(newCategory)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//CATEGORY UPDATE
router.put('/category/:id',(req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;   // {name,img,searchCount,etc} = req.body
  categoryUpdate(id,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//CATEGORY DELETE
router.delete('/category/:id', (req,res,next)=>{
  let {id} = req.params;
  categoryDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;