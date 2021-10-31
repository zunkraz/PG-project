const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/signup', passport.authenticate('signup', {session: false}), async(req, res, next) => {
    console.log('middle');
    res.status(200).json({message: 'success', user: req.user});
});

router.post('/signin', async(req, res, next) => {
    console.log('entra');
    passport.authenticate('signin', async(error, user, info) => {
        console.log('tambien');
        try {
            if(error || user) {
                const err = new Error('new error');
                return next(err);
            }
            req.login(user, {session: false}, (errr) => {
                if(errr) return next(errr);
                const {_id, email} = user;
                const body = { _id, email };
                const token = jwt.sign({user: body}, process.env.SECRET);

                return res.status(200).json({...user, token});
            })
        } catch (e) {
            next(e);
        }
    }), (req, res, next)
});

module.exports = router;