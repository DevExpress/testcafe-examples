import { Selector } from 'testcafe';

fixture `Get content from multiple elements`
    .page `./index.html`;

async function getTextFromElements (selector) {
    const result = [];

    for (let i = 0; i < await selector.count; i++) {
        result.push(await selector.nth(i).textContent);
    }

    return result;
}

test('Get text from all items in the <ul> list', async t => {
    const liElementsSelector = Selector('#ul').find('li');

    await t
        .expect(await getTextFromElements(liElementsSelector)).eql(['hello', 'world', '!']);
});