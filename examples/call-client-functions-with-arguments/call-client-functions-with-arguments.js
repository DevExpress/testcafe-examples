import { ClientFunction } from 'testcafe';

fixture `Parameterized Client Functions`
    .page('https://devexpress.github.io/testcafe/example/');

const getLocationPart = ClientFunction(locationPart => {
    return window.location[locationPart];
});

test('Parameterized Client Functions', async t => {
    await t
        .expect(getLocationPart('host')).eql('devexpress.github.io')
        .expect(getLocationPart('pathname')).eql('/testcafe/example/');
});