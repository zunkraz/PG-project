const User = require('../../models/User');

module.exports = async (req, res, next) => {
    
    try{
        const body = req.body
        const queryUsername = await User.findOne({username: body.username})
        const queryEmail = await User.findOne({email: body.email})

        if(queryUsername === null && queryEmail === null) {
            const {name, lastname, username, email, password, professionalRegistration, country, isAdmin, isProfesional} = body;

            let newUser = {
                name,
                lastname,
                username,
                email,
                password,
                professionalRegistration,
                country,
                isAdmin,
                isProfesional
            };

            await User.save(newUser);
            res.send(newUser)
         else if(queryUsername !== null) {
            res.status(400).send("El usuario ya existe")
        } else {
            res.status(400).send("El email ingresado ya existe")
        }
    }catch(err){
        next(err)
};
