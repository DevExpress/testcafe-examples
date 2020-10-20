import { ClientFunction } from 'testcafe';

const blurWindow = ClientFunction(() => {
    var blur = new Event('blur');

    return window.dispatchEvent(blur);
})

fixture `The web page in the background`
    .page `./index.html`;

test('dispatch the "blur" event', async t => {
    await t
        .expect(blurWindow()).ok();
});
