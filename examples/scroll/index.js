import { Selector, ClientFunction } from 'testcafe';

fixture `Scroll page`
    .page `./index.html`
    .beforeEach(async t => {
        await t.resizeWindow(800, 600);
    });

const btn1 = Selector('#btn1');
const btn2 = Selector('#btn2');

const scrollToElement = ClientFunction((selector, offsetX, offsetY) => {
    const element = selector();

    if (element && element.scrollIntoView)
        element.scrollIntoView();

    else if (offsetX !== void 0 && offsetY !== void 0)
        window.scrollBy(offsetX, offsetY);
});

const scrollBy = ClientFunction((x, y) => {
    window.scrollBy(x, y);
});

test('Scroll with an action', async t => {
    await t.hover(btn1);
});

test('Scroll with a ClientFunction', async () => {
    await scrollToElement(btn2, 250, 0);
    await scrollBy(2000, 0);
});
