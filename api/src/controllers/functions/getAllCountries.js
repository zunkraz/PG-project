const Country = require('../../models/Country');

module.exports = () => {
    return Country.find()
};
