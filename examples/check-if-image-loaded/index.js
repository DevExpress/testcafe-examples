import { ClientFunction } from 'testcafe';

const checkImageIsLoaded = ClientFunction(function() {
    const img = document.querySelector('img[data-testid="img"]');

    return new Promise(function(resolve, reject) {
        img.onload = function() { resolve('Image is loaded successfully.') };
        img.onerror = function() { reject('Error while loading image.') };
    })
});

fixture`Check if image has loaded`
    .page('./index.html');

test('Check if image has loaded', async t => {
    let result = await checkImageIsLoaded();

    await t
        .expect(result)
        .ok()
});
