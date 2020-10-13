import { ClientFunction } from 'testcafe';

const checkImageIsLoaded = ClientFunction(function() {
    const img = document.querySelector('img[data-testid="img"]');

    return new Promise(function(resolve, reject) {
        img.onload = function() { resolve('Image is loaded successfully.') };
        img.onerror = function() { reject('Error while loading image.') };
    })
});

fixture`My fixture`
    .page('./index.html');

test('My test', async t => {
    let result = await checkImageIsLoaded();

    await t
        .expect(result)
        .ok()
});
