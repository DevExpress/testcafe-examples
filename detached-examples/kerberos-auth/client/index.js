const { execSync } = require('child_process');

const express  = require('express');
const kerberos = require('kerberos');

const service = 'HTTP@testcafe.io';

const kerberosClients = new Map();

function parseQuery (req) {
    const args = req._parsedUrl.query.split('&');

    return args.reduce((result, arg) => {
        const [key, value] = arg.split('=');

        result[key] = value;

        return result;
    }, {});
}

const app = express();

app.get('/get-token', async (req, res) => {
    const { principal, password } = parseQuery(req);

    execSync(`echo -n "${password}" | kinit "${principal}"`);

    const kerberosClient = await kerberos.initializeClient(service, {});
    const kerberosToken  = await kerberosClient.step('');

    kerberosClients.set(principal, kerberosClient);

    res.send(kerberosToken);
});

app.listen(5000);
