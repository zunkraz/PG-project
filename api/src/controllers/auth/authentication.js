const LocalStrat = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


passport.use('signin', new LocalStrat({
    usernameField: 'username',
    passwordField: 'password'
}, async(username, password, done) => {
    const user = await User.findOne({username});
    if(!user) return done(null, false, {message: 'Usuario incorrecto'});
    console.log(user.password);
    console.log(password);

    try {
        if(await bcrypt.compare(password, user.password)) {
            return done(null, user);
        }
        else return done(null, false, {message:'Contraseña incorrecta'});
    } catch (error) {
        return done(error);
    }
}));

passport.use(new JWTStrategy({
    secretOrKey: process.env.SECRET,
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try {
        console.log(token);
        return done(null, token.user);
    } catch (error) {
        done(error);
    }
}));