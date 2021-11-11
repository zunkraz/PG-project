const ClientInvoice = require("../../models/ClientInvoice");
const ProfInvoice = require('../../models/ProfInvoice');

module.exports = ({userId}) =>{
  return ClientInvoice.find({customerId:userId})
    .then(r => {
      if(r.length) return r;
      else return ProfInvoice.find({professionalId:userId})
    })
}

// IGNORAR COMENTARIOS  (son ayuda memoria que voy a borrar)
// ClientInvoice.find({customerId}).select('numberOfSessions orderID totalCost description date')
// .populate([{path: 'customerId', select: 'username'},
// {path: 'schedules',select: 'userId'}])
// ProfInvoice.find({professionalId:userId})
//     .populate([{path: 'customerId', select: 'username'},
//     {path: 'schedules',select: 'date userId'}])