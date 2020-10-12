import { ClientFunction } from 'testcafe';

const checkImageStatus = ClientFunction( () => {
    const img = document.querySelector('img[data-testid="img"]');

    return new Promise( (resolve, reject) => {
        img.onload  = () => resolve('Resolved!');
        img.onerror = () => reject('Rejected!');
    })
});

fixture `My fixture`
    .page('./index.html');

test('My test', async t => {
    let result = await checkImageStatus();

    await t
        .expect(result)
        .ok()
});
