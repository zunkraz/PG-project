const Appointment = require("../models/Appointment");

module.exports = (userId,as) => {
  if (as === 'prof') return Appointment.find({professionalId: userId})
    .populate([{path: 'customerId', select: 'username'},
      {path: 'professionalId', select: 'username'}]);
  else return Appointment.find({customerId: userId})
    .populate([{path: 'customerId', select: 'username'},
      {path: 'professionalId', select: 'username'}]);
}