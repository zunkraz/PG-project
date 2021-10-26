const express = require ('express');
const route = express.Router();
const {createUser} = require('../controllers/index')

route.post('/', (req, res) => {
    const body = req.body;

    let creation = createUser(body);

    creation
    .then( newUser => res.json(newUser) )
    .catch( err => res.status(400).json(err) )
})


module.exports = route;