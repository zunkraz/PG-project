const User = require('../../models/User');

module.exports = async (req, res, next) => {
    try{
        const body = req.body
        const queryUsername = await User.findOne({username: body.username})
        const queryEmail = await User.findOne({email: body.email})

        if(queryUsername) throw new Error('username')
        if(queryEmail) throw new Error('email')
    
        const {name, lastname, username, email, password, professionalRegistration, country, isAdmin, isProfesional} = body;

        let newUser = User.create({
            name,
            lastname,
            username,
            email,
            password,
            professionalRegistration,
            country,
            isAdmin,
            isProfesional
        });
        await User.save(newUser)
        return res.send(newUser)
        
    }catch(err){
        next(err.message === 'username' ? 
        {
            message: 'El usuario ingresado ya existe',
            status: 400
        } : 
        {
            message: 'El email ingresado ya existe',
            status: 400
        })
    }
};