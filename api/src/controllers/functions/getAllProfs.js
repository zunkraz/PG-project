const User = require('./../../models/User')

module.exports = async (req, res, next) => {
    try{
        let users = (await User.find({isProfessional:true}, 'username name lastName category likes dislikes img'))
       
        return res.send(users)
    }catch(err){
        let error = {
            message: 'Server error',
            status: 500
        }
        next(error)
    }
}