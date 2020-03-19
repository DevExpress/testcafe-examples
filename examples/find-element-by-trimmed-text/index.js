import { Selector } from 'testcafe';

fixture `Fixture`
    .page('./index.html');

const findElementByTrimmedText = Selector((baseCSSSelector, text) => {
    const el          = document.querySelector(baseCSSSelector);
    const trimmedText = el && el.innerText && el.innerText.trim();

    return trimmedText === text ? el : null;
});

test('Find element by trimmed text', async t => {
    const targetElement = findElementByTrimmedText('h1', 'Text');

    await t.expect(targetElement.exists).ok();
});
