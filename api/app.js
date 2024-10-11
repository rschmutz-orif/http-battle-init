const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();    

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({ message : 'HTTP Battle - API'})
});

app.get('/api/test', (req, res) => {
    res.status(200).json({ message: 'Hello world'})
});

module.exports = app;