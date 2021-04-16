import { Selector } from 'testcafe';

const mockGeolocationScript = 'navigator.geolocation.getCurrentPosition = success =>  success({ coords: { latitude: 30, longitude: -105, }, timestamp: Date.now() });';

fixture `Mock geolocation`
    .page('./index.html')
    .clientScripts({ content: mockGeolocationScript });

test('Check geolocation', async t => {
    await t
        .click('#checkGeolocation')
        .expect(Selector('#latitudeValue').textContent).eql('30')
        .expect(Selector('#longitudeValue').textContent).eql('-105');
});
