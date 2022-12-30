const fs    = require('fs');
const url   = require('url');
const path  = require('path');
const https = require('https');

const DEFAULT_PORT = 3000;

const SERVER_CERT_FILE_NAME = 'server_cert.pem';
const SERVER_KEY_FILE_NAME  = 'server_key.pem';

const certsPath  = path.join(__dirname, './certs');

const serverCertPath = path.join(certsPath, SERVER_CERT_FILE_NAME);
const serverKeyPath  = path.join(certsPath, SERVER_KEY_FILE_NAME);

const cert = fs.readFileSync(serverCertPath);
const key  = fs.readFileSync(serverKeyPath);

const options = {
    key,
    cert,

    requestCert:        true,
    rejectUnauthorized: false,

    ca: [cert]
};

const handlers = {
    ['/'] (req, res) {
        res.end('<a href="/authenticate">Log in using client certificate</a>');
    },

    ['/authenticate'] (req, res) {
        const clientCert = req.socket.getPeerCertificate();

        if (req.client.authorized) {
            res.statusCode = 200;
            res.end(`Hello ${clientCert.subject.CN}, your certificate was issued by ${clientCert.issuer.CN}!`);
        }
        else if (clientCert.subject) {
            res.statusCode = 403;
            res.end(`Sorry ${clientCert.subject.CN}, certificates from ${clientCert.issuer.CN} are not welcome here.`);
        }
        else {
            res.statusCode = 401;
            res.end('Sorry, but you need to provide a client certificate to continue.');
        }
    },
};

class Server {
    constructor () {
        this.server = https.createServer(options, (req, res) => {
            const { pathname } = url.parse(req.url);

            const handler = handlers[pathname];

            if (typeof handler === 'function')
                handler(req, res);
        });
    }

    run (port = DEFAULT_PORT) {
        this.server.listen(port);
    }

    async close () {
        return new Promise(resolve => this.server.close(resolve));
    }
}

module.exports = { Server };
