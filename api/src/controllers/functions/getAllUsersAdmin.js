//admin function
const User = require('../../models/User');

module.exports = () => {
  return User.find()
    .sort({username:1})
    .select({name:1,username:1,lastname:1,email:1,isProfessional:1,isAdmin:1,img:1,_id:1});
}