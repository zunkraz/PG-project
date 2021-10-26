const User = require('../../models/User');

module.exports =
async function createUser(body) {
    let user = new User({
        userName: body.username,
        email: body.email,
        password: body.password,
        isAdmin: body.isAdmin,
        isProfesional: body.isProfesional,
        professions: body.professions,
        availability: body.availability,
        isActive: body.isActive
    });
    
    return await user.insertOne();
};
