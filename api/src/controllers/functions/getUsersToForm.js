const User = require('../../models/User');

module.exports = () => {
    return User.find({}, {_id: false, username: true, email: true})
};