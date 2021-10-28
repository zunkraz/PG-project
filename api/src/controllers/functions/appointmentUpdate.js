//admin function
const Appointment = require ('../../models/Appointment');

module.exports = (id,updateInfo) => {
  return Appointment.findByIdAndUpdate(id,{
    $set: updateInfo
  }, {new: true});
}