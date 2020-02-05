import { Selector } from 'testcafe';

fixture `Element properties`
    .page('https://devexpress.github.io/testcafe/example/');

test('Check an element\'s markup', async t => {
    const selector = Selector('label[for]').addCustomDOMProperties({
        outerHTML: el => el.outerHTML
    });

    const elementOuterHTML = await selector().outerHTML;

    await t.expect(elementOuterHTML).eql('<label for="remote-testing"><input type="checkbox" name="remote" id="remote-testing">Support for testing on remote devices</label>');
});
