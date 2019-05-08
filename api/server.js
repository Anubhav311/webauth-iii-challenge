const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use('/api/auth');
// server.use('/api/users');

server.get('/', (req, res) => {
    res.send("It's Working!")
})

module.exports = server;