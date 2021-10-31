const Country = require('../../models/Country');

module.exports = (name) => {
    return Country.findOne({name})
    // .populate("user", 'username')
};