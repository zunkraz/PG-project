const User = require('../../models/User');

module.exports = (username) => {
    
    return User.findOne({username})
    .populate(
        "country", 'name'
    )
    .populate(
        "category", 'name'
    )
};