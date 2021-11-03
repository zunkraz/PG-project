const User = require('./../../models/User')

module.exports = async (req, res, next) => {
    try{
        const {featured} = req.query
        let users = await User.find({isProfessional:true}, 'username name lastname category country likes dislikes img')
        .populate('category', 'name')
        .populate('country', 'name')

        users = featured==='true' ? 
        users.sort((a,b)=>(b.likes-b.dislikes)-(a.likes-a.dislikes)).slice(0,5) :
        users;
        console.log(users[0])
        

        return res.send(users)
    }catch(err){
        next(err)
    }
};