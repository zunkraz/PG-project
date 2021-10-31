// module.exports = {
//      authUser: (req, res, next) => {
//         if(!req.user.token) return res.status(404).json({message: 'Necesitas acceder a tu cuenta para ver esto'});
//         else next(req.user);
// },
//     authAdmin: (isAdmin) => {

//         return (req, res, next) => {
//             console.log(req);
//             // if(!req.user) return res.status(400).json({message: '(>_<) Esta ruta solo es accesible para los administradores'});
//             // else next();
//         }
//     }
// }
const LocalStrat = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJWT;

passport.use('signup', new LocalStrat({
    usernameField: 'email',
    passwordField: 'password'
}, async(email, password, done) => {
    const user = await User.findOne({email});
    if(!user) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            let newUser = new User({
                email,
                password: hashedPassword,
            });
            console.log(newUser);
            return done(null, newUser);
        } catch (error) {
            done(error);
        }
    }else {
        return done(null, false, {message: 'Ya existe un usuario registrado con este email.'})
    }
}));

passport.use('signin', new LocalStrat({
    usernameField: 'email',
    passwordField: 'password'
}, async(email, password, done) => {
    const user = await User.findOne({email});
    if(!user) return done(null, false, {message: 'Email incorrecto'});
    try {
        if(bcrypt.compare(password, user.password)) {
            return done(null, user);
        }
        else return done(null, false, {message:'Contraseña incorrecta'});
    } catch (error) {
        return done(error);
    }
}));

// passport.use('logout', new LocalStrat({
//     usernameField: 'email',
//     passwordField: 'password'
// }, authenticateUser));

passport.serializeUser((user, done) => done(null, user.email));
passport.deserializeUser((email, done) => done(null, ));