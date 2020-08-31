import { Selector } from 'testcafe';

fixture `Determine if a page is tested`
    .page `./index.html`
    .clientScripts({ content: 'window.isTestCafe = true;' });

test('Determine if a page is tested', async t => {
    await t.expect(Selector('#testcafe-detector').textContent).contains('TestCafe detected!');
});