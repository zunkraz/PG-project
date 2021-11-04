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
                req.login(user, (er) => {
                    if(er) return next(er);
<<<<<<< HEAD
<<<<<<< HEAD
                    const {_id, email} = user;
=======
                    const {_id, username, email} = user;
>>>>>>> 0f1201cb2f4fcc22bec0351b35f64f0e3997ede1
=======
                    const {_id, username, email} = user;
>>>>>>> 0f1201cb2f4fcc22bec0351b35f64f0e3997ede1
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