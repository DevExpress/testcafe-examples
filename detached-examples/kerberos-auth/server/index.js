const { promises: fs } = require('node:fs');

const express  = require('express');
const kerberos = require('kerberos');

const service = 'HTTP@testcafe.io';

const app = express();

app.get('/', (req, res) => {
    res.send('<a href="/login">Login</a>');
});

app.get('/login', async (req, res) => {
    if (!req.headers.authorization) {
        res.set('WWW-Authenticate', 'Negotiate');
        res.status(401).send();
    }
    else {
        const authHeader     = req.headers.authorization;
        const clientToken    = authHeader.substring(10);
        const kerberosServer = await kerberos.initializeServer(service);
        const serverToken    = await kerberosServer.step(clientToken);

        res.set('WWW-Authenticate', 'Negotiate ' + serverToken);
        res.send(`Hello, ${kerberosServer.username}!`);
    }
});

app.listen(5000);

//This hack is needed for stable work on Github Actions runner (ubuntu):
//for some reason, kdc server is trying to access the principals database.
//This does not happen when running locally on Windows.
async function replaceHost () {
    const oldHosts = await fs.readFile('/etc/hosts', 'utf-8');
    const hostname = await fs.readFile('/etc/hostname', 'utf-8');
    const newHosts = oldHosts.replaceAll(hostname, 'testcafe.io\n');

    await fs.writeFile('/etc/hosts', newHosts);
}

replaceHost();
