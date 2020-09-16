import { Selector } from 'testcafe';

fixture `Iterate through list elements`
    .page('https://devexpress.github.io/testcafe/example/');

test('Iterate through list elements', async t => {
    const ids = ['remote-testing', 'reusing-js-code', 'background-parallel-testing', 'continuous-integration-embedding', 'traffic-markup-analysis'];

    for (const item of ids) {
        await t.click(Selector(`#${item}`));
    }

    const itemsText = ['Support for testing on remote devices', 'Re-using existing JavaScript code for testing', 'Running tests in background and/or in parallel in multiple browsers', 'Easy embedding into a Continuous integration system', 'Advanced traffic and markup analysis'];


    for (const text of itemsText) {
        let counter = 0;
        const checkboxes = Selector('label').withExactText(text).child('input').withAttribute('type', 'checkbox')
        await t.expect( checkboxes.checked ).ok();
        counter++;
    }

});
