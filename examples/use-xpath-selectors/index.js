import XPathSelector from './xpath-selector';

fixture `Use XPath selectors`
    .page('https://devexpress.github.io/testcafe/example/');

test('Click checkboxes', async t => {
    const firstCheckbox  = XPathSelector('//input[@type="checkbox"]');
    const secondCheckbox = XPathSelector('//input[@type="checkbox"]').nth(1);

    await t
        .click(firstCheckbox)
        .click(secondCheckbox);
});
