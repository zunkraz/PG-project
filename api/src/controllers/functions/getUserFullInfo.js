const User = require('../../models/User');

module.exports = (username) => {
    return User.find({username}).populate("category", 'id name')
};