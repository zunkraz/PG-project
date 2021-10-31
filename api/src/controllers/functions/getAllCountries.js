const Country = require('../../models/Country');

module.exports = () => {
    return Country.find({}, '_id name').sort({name:1})
};