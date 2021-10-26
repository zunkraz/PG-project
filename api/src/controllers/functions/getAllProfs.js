const User = require('./../../models/User')

module.exports = async (req, res, next) => {
    try{
        let users = (await User.find({}))
        .map(u => {
            const {username,name,lastName,category,likes,dislikes,img} = u
            return {
                username,
                name,
                lastName,
                category,
                likes,
                dislikes,
                img
            }
        })
        res.send(users)
    }catch(err){
        let error = {
            message: 'Server error',
            status: 500
        }
        next(error)
    }
}