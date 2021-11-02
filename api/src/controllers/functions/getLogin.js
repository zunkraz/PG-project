const User = require('./../../models/User')
const bcrypt = require('bcrypt');

module.exports = async (req,res,next) => {
    try{
        const {username,password} = req.query;
        let user = await User.findOne({username:username}, 'password')

        let msg 
        let stat
        if(!user) return res.status(404).send({message:'User not found'});
        if(await bcrypt.compare(password, user.password)){
            msg = 'Correcto'
            stat = 200
        }else{
            msg = 'Las contraseñas no coinciden'
            stat = 400
        } 
        res.status(stat).send(msg)
    }catch(err){
        if(err.message.includes('null')){
            next({message:'User not found',status:400})
        }else{
            next(err)
        }
    }
}