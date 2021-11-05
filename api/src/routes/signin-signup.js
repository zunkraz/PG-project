const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const maxAge = 24 * 60 * 60;

router.post('/signin', async(req, res, next) => {
    passport.authenticate('signin', async(error, user, info) => {
        try {
            if(error) {
                return next(error);
            }
            if(user){
                req.login(user, {session: false}, (err) => {
                    if(err) return next(err);
                    const {_id, name, lastname, email, username, isProfessional, isAdmin} = user._doc;
                    const body = {_id, name, lastname, email, username, isProfessional, isAdmin};
                    const token = jwt.sign(JSON.stringify({_id, username}), process.env.SECRET);
                    res.cookie('isAdmin', isAdmin, {httpOnly: true, secure: true})
                    res
                    .cookie('jwt',
                        token, {
                            httpOnly: true,
                            secure: false, //--> SET TO TRUE ON PRODUCTION
                            maxAge: maxAge * 1000
                        }
                    )
                    .status(200)
                    .json({
                        message: 'Success',
                        user: {...body, token}
                    })
                })
            }
            return res.status(304).json(info);
        } catch (e) {
            next(e);
        }
    }) (req, res, next)
});

router.get('/signout', (req, res) => {
    if (req.cookies['jwt']) {
        res
        .clearCookie('jwt')
        .status(200)
        .json({
            message: 'Successfully logged out'
        })
    } else {
        res.status(401).json({
            error: 'Invalid token'
        })
    }
})

module.exports = router;