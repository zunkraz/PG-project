const User = require('./../../models/User')

module.exports = async (req,res,next) => {
    try{
        const {username} = req.query;
        const {password} = req.body;
        let user = await User.findOne({username:username}, 'password')

        let msg 
        let stat
        if(password === user.password){
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