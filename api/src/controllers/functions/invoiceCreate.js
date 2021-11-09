const Invoice = require("../../models/Invoice");

module.exports = (data) =>{
  const newInvoice = {
    customerId:data.customerId,
    numberOfSessions:data.cart.length,
    orderID: data.orderID,
    payerID: data.payerID,
    totalCost: data.cart.reduce((total,session)=>{return total+session.price},0),
    schedules: data.cart.map(session => {return {_id:session.id}}),
    description: data.cart.reduce((text,session)=>{
      if (text.includes(session.name)) return text
      else return text + session.name + ', ' },'').slice(0,-2)
  }
  const newInv = new Invoice(newInvoice);
  return newInv.save();
}
