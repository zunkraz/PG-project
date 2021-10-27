const User = require('./../../models/User')

module.exports = async (req, res, next) => {
    try{
        const {username} = req.params
        let user = await User.findOne({
            username:username
        }).populate("categories")

        if(!user) throw new Error('404')
        return res.send(user)
    }catch(err){ 
        next(err.message === '404' ? 
        {
            message: 'User not found',
            status: 404
        } : 
        {
            message: 'Server Error',
            status: 500
        })
    }
}