import { ClientFunction } from 'testcafe';

const checkImageIsLoaded = ClientFunction(function () {
    const img = document.getElementById('img');

    return new Promise(function (resolve, reject) {
        if (img.complete)
            resolve('Image is already loaded or rejected.');

        img.addEventListener('load', function () {
            resolve('Image is loaded successfully.');
        });
        img.addEventListener('error', function () {
            reject('Error while loading image.');
        });
    });
});

fixture`Check if image has loaded`
    .page('./index.html');

test('Check if image has loaded', async t => {
    await t.expect(checkImageIsLoaded()).eql('Image is loaded successfully.');
});
