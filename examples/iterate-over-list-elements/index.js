import { Selector } from 'testcafe';

fixture `Iterate through list elements`
    .page('https://devexpress.github.io/testcafe/example/');

test('Iterate through list elements', async t => {
    const elementInfos = [
        {
            id:   'remote-testing',
            text: 'Support for testing on remote devices'
        },
        {
            id:   'reusing-js-code',
            text: 'Re-using existing JavaScript code for testing'
        },
        {
            id:   'background-parallel-testing',
            text: 'Running tests in background and/or in parallel in multiple browsers'
        },
        {
            id:   'continuous-integration-embedding',
            text: 'Easy embedding into a Continuous integration system'
        },
        {
            id:   'traffic-markup-analysis',
            text: 'Advanced traffic and markup analysis'
        }
    ];

    for (const elementInfo of elementInfos)
        await t.click(Selector(`#${elementInfo.id}`));

    const checkboxes = Selector('legend')
        .withExactText('Which features are important to you:')
        .parent('fieldset').child('input[type=checkbox]');

    const checkboxesCount = await checkboxes.count;

    for (let i = 0; i < checkboxesCount; i++) {
        const currentCheckbox = checkboxes.nth(i);
        
        await t.expect(currentCheckbox.textContent).eql(elementInfos[i].text);
    }
});