const router = require('express').Router();
const {postCountry, getAllCountries, getOneCountry} = require('../controllers/index');
const Country = require('../models/Country');


router.post('/', (req, res, next) => {
    const body = req.body;
    postCountry(body)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/', (req, res, next) => {
    getAllCountries()
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/:name', (req, res, next) => {
    const {name} = req.params;
    getOneCountry(name)
        .then(result => res.json(result))
        .catch(err => next(err))
});

// router.delete('/', async (req, res, next) => {
//     await Country.deleteMany({name: {$exists:true}})
//         .then(result => res.json(result))
//         .catch(err => res.json(err))
// });

module.exports = router; 