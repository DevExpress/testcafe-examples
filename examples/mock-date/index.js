import { ClientFunction } from 'testcafe';

fixture `How to mock date`
    .clientScripts([
        { module: 'mockdate' },
        { content: 'window.MockDate.set("2000-10-20")' }
    ]);

const getTimestamp = ClientFunction(() => {
    var date = new Date();

    return date.valueOf();
});

test('Mock date', async t => {
    await t.expect(getTimestamp()).eql(new Date('2000-10-20').valueOf());
});
