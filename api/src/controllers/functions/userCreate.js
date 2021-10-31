const User = require('../../models/User');
const bcrypt = require('bcrypt');

module.exports = async (body) => {
    const {isAdmin, name, lastname, username, email, password, country, isProfessional, category, professionalRegistration} = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser = new User({
        isAdmin,
        name,
        lastname,
        username,
        email,
        password: hashedPassword,
        country,
        isProfessional,
        category,
        professionalRegistration,
    });
    console.log(newUser);
    return newUser.save()
};