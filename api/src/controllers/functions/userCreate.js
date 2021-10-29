const User = require('../../models/User');

module.exports = (body) => {
    const {name, lastname, username, email, password, isProfessional, category, professionalRegistration} = body;

    let newUser = new User({
        name,
        lastname,
        username,
        email,
        password,
        isProfessional,
        category,
        professionalRegistration,
    });
    return newUser.save()
};
