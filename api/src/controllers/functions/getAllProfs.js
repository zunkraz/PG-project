const User = require('./../../models/User')

module.exports = async (req, res, next) => {
    try{
        let users = (await User.find({isProfessional:true}, 'username name lastname category likes dislikes img')
        .populate('category', 'id name'))
        
       
        return res.send(users)
    }catch(err){
        // let error = {
        //     message: 'Server error',
        //     status: 500
        // }
        next(err)
    }
}