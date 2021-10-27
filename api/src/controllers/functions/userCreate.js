const User = require('../../models/User');

module.exports = async (req, res) => {
    try{
        // const queryUsername = await User.findOne({username: body.username})
        // const queryEmail = await User.findOne({email: body.email})
        // if(queryUsername) throw new Error('username')
        // if(queryEmail) throw new Error('email')
    
        const {name, lastname, username, email, password, isProfesional, category, professionalRegistration} = req.body;

        let newUser = User.create({
            name,
            lastname,
            username,
            email,
            password,
            isProfesional,
            category,
            professionalRegistration,
        });
        await newUser.save()
        return res.send(newUser)
        
    }catch(err){
        res.status(500).send(err)
    }
};