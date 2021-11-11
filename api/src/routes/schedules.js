const router = require('express').Router();
const deleteSchedules = require('../controllers/functions/deleteSchedules');
const getAllSchedules = require('../controllers/functions/getAllSchedules');
const getAvailableSchedules = require('../controllers/functions/getAvailableSchedules');
const getSchedulesById = require('../controllers/functions/getSchedulesById');
const postManySchedules = require('../controllers/functions/postManySchedules');
const postSchedule = require('../controllers/functions/postSchedule');
const setAvailability = require('../controllers/functions/setAvailability');
const {loginAuth} = require('../controllers/auth/roleAuth');

router.post('/', loginAuth, (req, res, next) => {
    const body = req.body;
    postSchedule(body)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/', loginAuth, (req, res, next) => {
    getAllSchedules()
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/:id/true', loginAuth, (req, res, next) => {
    const {id} = req.params;
    getAvailableSchedules(id)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/:id', loginAuth, (req, res, next) => {
    const {id} = req.params;
    getSchedulesById(id)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.delete('/', loginAuth, (req, res, next) => {
    deleteSchedules()
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.put('/:id', loginAuth, (req, res, next) => {
    const {id} = req.params;
    setAvailability(id)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.post('/many', loginAuth, (req, res, next) => {
    const body = req.body;
    postManySchedules(body)
        .then(result => res.json(result))
        .catch(err => next(err))
});


module.exports = router;