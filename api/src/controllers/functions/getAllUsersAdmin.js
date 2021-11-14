//admin function
const User = require('../../models/User');

module.exports = (_id) => {
  return User.find({_id:{$ne:_id}}).collation({locale:'en'})
    .sort({username:1})
    .select('name username lastname email isProfessional isAdmin img _id isVerified isActive');
}