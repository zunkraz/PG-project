const {Router} = require("express");
const router = Router();
const {invoiceCreate,getInvoicesByUserId,deleteOneInvoice} = require('../controllers/index.js');

//POST NEW INVOICE
router.post('/',(req,res,next)=>{
  let data = req.body;
  invoiceCreate(data)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//GET INVOICEs BY userId
router.get('/:userId',(req,res,next)=>{
  let {userId} = req.params;
  getInvoicesByUserId(userId)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//DELETE one INVOICE :c
router.delete('/:id',(req,res,next)=>{
  let {id} = req.params;
  deleteOneInvoice(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;