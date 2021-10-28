const User = require('../../models/User');

module.exports = async (req, res, next) => {
    try{

        const {name, lastname, username, email, password, isProfessional, category, professionalRegistration} = req.body;

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
        await newUser.save()
        return res.send(newUser)
        
    }catch(err){
        let error = {
            message: 'Server error',
            status: 500
        }
        next(error)
    }
};
