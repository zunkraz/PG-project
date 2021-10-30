const User = require('../../models/User');

module.exports = (body) => {
    const {isAdmin, name, lastname, username, email, password, country, isProfessional, category, professionalRegistration} = body;

    let newUser = new User({
        isAdmin,
        name,
        lastname,
        username,
        email,
        password,
        country,
        isProfessional,
        category,
        professionalRegistration,
    });
    return newUser.save()
};