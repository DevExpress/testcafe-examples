import { Selector } from 'testcafe';

import { Auth } from './auth';

fixture('Client Certificate Auth')
    .page('https://localhost:3000');

const authLink = Selector('body > a');
const body     = Selector('body');

test('Auth without cert', async t => {
    await t
        .click(authLink)
        .expect(body.innerText).contains('Sorry, but you need to provide a client certificate to continue.');
});

test('Auth as Alice', async t => {
    await t
        .addRequestHooks(new Auth('Alice'))
        .click(authLink)
        .expect(body.innerText).contains('Hello Alice, your certificate was issued by localhost!');
});

test('Auth as Bob', async t => {
    await t
        .addRequestHooks(new Auth('Bob'))
        .click(authLink)
        .expect(body.innerText).contains('Sorry Bob, certificates from Bob are not welcome here.');
});
