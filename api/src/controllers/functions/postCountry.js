const Country = require('../../models/Country');

module.exports = (body) => {
    const {name} = body;
    
    const newCountry = new Country({
        name
    })
    return newCountry.save()
};