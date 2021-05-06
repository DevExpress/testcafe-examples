const express = require('express');

const app  = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

let color = void 0;

app.get('/save', (req, res) => {
    if (color)
        res.sendFile(__dirname + '/not-ok.html');
    else {
        color = req.query.color;
        res.sendFile(__dirname + '/ok.html');
    }
});

module.exports = app.listen(port);
