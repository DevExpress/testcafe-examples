const http = require('http');

const { RequestHook } = require('testcafe');

const principal = 'testcafe-user';
const password  = 'testcafe-pass';

async function getKerberosToken () {
    return new Promise(resolve => {
        http.get(`http://localhost:3001/get-token?principal=${principal}&password=${password}`, res => {
            const data = [];

            res.on('data', chank => data.push(chank));
            res.on('end', () => resolve(data.join('')));
        });
    });
}

export class KerberosAuth extends RequestHook {
    constructor () {
        super(/login/);
    }

    async onRequest (event) {
        event.requestOptions.headers.authorization = 'Negotiate ' + await getKerberosToken();
    }

    async onResponse () {
    }
}
