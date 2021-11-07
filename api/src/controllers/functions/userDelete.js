//admin function
const User = require('../../models/User');

module.exports = (username) => {
  return User.deleteOne({username},{new: true});
}