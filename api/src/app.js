const express = require('express')
const server = express()
const routes = require('./routes/index.js')

server.use('/', routes)


module.exports = server