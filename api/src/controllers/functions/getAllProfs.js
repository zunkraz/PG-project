const User = require('./../../models/User')

module.exports = async (req, res, next) => {
    try{
        let users = (await User.find({isProfessional:true}, 'username name lastname category country likes dislikes img')
        .populate('category', 'id name')
        .populate('country', 'name'))

        return res.send(users)
    }catch(err){
        next(err)
    }
};