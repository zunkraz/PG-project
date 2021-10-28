const User = require('../../models/User');

module.exports = async (req, res, next) => {
    try{
        const allUsers = await User.find({}, {_id: false, username: true, email: true})
        return res.send(allUsers)
        
    }catch(err){
        let error = {
            message: 'Server error',
            status: 500
        }
        next(error)
    }
};