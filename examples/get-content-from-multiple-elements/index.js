import { Selector } from 'testcafe';

fixture `Get content from multiple elements`
    .page `./index.html`;

test('Get text from all items in the <ul> list', async t => {
    const expectedContent    = ['hello', 'world', '!'];
    const liElementsSelector = Selector('#ul').find('li');

    await t.expect(liElementsSelector.count).eql(expectedContent.length);

    const nodeCount = await liElementsSelector.count;

    for (let i = 0; i < nodeCount; i++) 
        await t.expect(liElementsSelector.nth(i).textContent).eql(expectedContent[i]);
    
});
