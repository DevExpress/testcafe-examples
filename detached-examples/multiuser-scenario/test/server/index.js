const path    = require('path');
const express = require('express');

const app  = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

let color = void 0;

app.get('/save', (req, res) => {
    if (color)
        res.sendFile(path.join(__dirname, 'not-ok.html'));
    else {
        color = req.query.color;
        res.sendFile(path.join(__dirname, 'ok.html'));
    }
});

module.exports = app.listen(port);
