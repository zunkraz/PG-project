const ClientInvoice = require("../../models/ClientInvoice");
const ProfInvoice = require('../../models/ProfInvoice');

module.exports = ({id}) => {
  return ClientInvoice.findOneAndDelete({_id:id})
    .then(r => ProfInvoice.findOneAndDelete({_id:id}))
}