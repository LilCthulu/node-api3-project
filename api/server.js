const express = require('express');
const usersRouter = require('./users/users-router')
const { logger } = require('./middleware/middleware')
const server = express();

// Allows express to parse JSON in request bodies
server.use(express.json())

server.use(logger)
server.use('/api/users', usersRouter)

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;