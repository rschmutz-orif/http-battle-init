const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();    

app.use((req, res, next) => {
    if (/.*\/api\/.*$/.test(req.path)) {
        next();
    }else{
        if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
        }else{
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
        }
    }
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/test', (req, res) => {
    res.status(200).json({ message: 'Hello world'})
});


module.exports = app;