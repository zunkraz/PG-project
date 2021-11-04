const categories = require('./categories');
const admin = require('./admin');
const users = require('./users');
const countries = require('./countries');
const login = require('./signin-signup');


router.use('/tips', tips);
router.use('/professionals', professionals);
router.use('/reviews', reviews);
router.use('/categories', categories);
router.use('/admin', admin);    
router.use('/users', users);
router.use('/login', login); //esta ruta valida el inicio de sesión
router.use('/countries', countries);

module.exports = router;