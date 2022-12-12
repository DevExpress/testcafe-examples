import { Selector } from 'testcafe';

import { KerberosAuth } from './kerberos-auth-hook';

fixture `Kerberos authenticate`
    .page `localhost:3000`
    .requestHooks(new KerberosAuth());

test('Auth', async t => {
    await t
        .click('a')
        .expect(Selector('body').innerText).contains('Hello, testcafe-user@TESTCAFE.IO!');
});
