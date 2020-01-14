import { ClientFunction } from 'testcafe';

fixture `Wait for an element property value`
    .page `./index.html`;

const getStyleWidthInPercents = ClientFunction(() => {
    return document.querySelector('.progress').style.width;
});

test('progress', async t => {
    await t.expect(getStyleWidthInPercents()).eql('100%', { timeout: 30000 })
});
