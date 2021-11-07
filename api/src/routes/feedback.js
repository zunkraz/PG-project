const {Router} = require("express");
const router = Router();
// const { } = require('../controllers/index.js');
const Feedback = require ('../models/Feedback');

//GET ALL FEEDBACKS
router.get('/',(req,res,next)=>{
  let {customerId,professionalId} = req.query;
  if(customerId) Feedback.find({customerId}) .populate('customerId', 'id username name lastname')
    .populate('professionalId', 'id username name lastname')
    .populate('appointmentId', 'id')
    .then(result => res.json(result))
    .catch(err => next(err));
  if(professionalId) Feedback.find({professionalId}) .populate('customerId', 'id username name lastname')
    .populate('professionalId', 'id username name lastname')
    .populate('appointmentId', 'id')
    .then(result => res.json(result))
    .catch(err => next(err));
  else Feedback.find()
    .populate('customerId', 'id username name lastname')
    .populate('professionalId', 'id username name lastname')
    .populate('appointmentId', 'id')
    .then(result => res.json(result))
    .catch(err => next(err));
});
//POST NEW FEEDBACK
router.post('/',(req,res,next)=>{
  let newFeedback = req.body;
  const newFeed = new Feedback(newFeedback);
  newFeed.save()
    .then(result => res.json(result))
    .catch(err => next(err));
});
//UPDATE EXISTING FEEDBACK
router.put('/:id',(req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;
  Feedback.findByIdAndUpdate(id,{$set: updateInfo}, {new: true})
    .then(result => res.json(result))
    .catch(err => next(err));
});
//DELETE FEEDBACK
router.delete('/:id',(req,res,next)=>{
  let {id} = req.params;
  Feedback.deleteOne({_id:id},{new: true})
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;