const LocalStrat = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    return token;
}

passport.use('signin', new LocalStrat({
    usernameField: 'username',
    passwordField: 'password'
}, async(username, password, done) => {
    const user = await User.findOne({username});
    if(!user) return done(null, false, {message: 'Usuario incorrecto'});
    try {
        if(await bcrypt.compare(password, user.password)) {
            return done(null, user);
        }
        else return done(null, false, {message:'Contraseña incorrecta'});
    } catch (error) {
        return done(error);
    }
}));

// passport.use('jwt', new JWTStrategy({
//     secretOrKey: process.env.SECRET,
//     jwtFromRequest: cookieExtractor
// }, async (decodedToken, done) => {
//     if(decodedToken){
//        return done(null, decodedToken);
//     }
//     return done(null, false, {message: 'Unauthorized'})
// }));
