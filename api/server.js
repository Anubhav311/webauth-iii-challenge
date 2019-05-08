const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../routers/users-router/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.send("It's Working!")
})

module.exports = server;