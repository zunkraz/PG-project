const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/signin', async(req, res, next) => {
    passport.authenticate('signin', async(error, user, info) => {
        try {
            if(error) {
                const err = new Error('new error');
                return next(err);
            }
            if(user){
                req.login(user, {session: false}, (er) => {
                    if(er) return next(er);
                    const {_id, username, email} = user;
                    const body = { _id, username, email };
                    console.log('userrrr',user);
                    const token = jwt.sign({user: body}, process.env.SECRET, {expiresIn : '1d'});
    
                    return res.status(200).json({...body, token});
                })
            }
            return res.status(404).json(info);
        } catch (e) {
            next(e);
        }
    }) (req, res, next)
});

module.exports = router;