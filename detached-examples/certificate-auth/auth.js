const fs    = require('fs');
const path  = require('path');

const { RequestHook } = require('testcafe');

function getCertValue (userName, type) {
    const filePath = path.join(__dirname, 'certs', `${userName}_${type}.pem`);

    return fs.readFileSync(filePath);
}

function getCertValues (userName) {
    return {
        cert: getCertValue(userName, 'cert'),
        key:  getCertValue(userName, 'key'),
    };
}

exports.Auth = class Auth extends RequestHook {
    constructor (userName) {
        super(() => true);

        this.cert = getCertValues(userName.toLowerCase());
    }

    onRequest (event) {
        Object.assign(event.requestOptions, this.cert);
    }

    onResponse () {
    }
};
