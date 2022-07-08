import { Selector } from 'testcafe';

const image = Selector('.qa-guy');

fixture`Set window size for all tests with global hooks`
    .page`https://devexpress.github.io/testcafe/`;

test('Test 1. Image disappears on small screens', async t => {
    await t.expect(image.visible).notOk();
});

test('Test 2. Image disappears on small screens', async t => {
    await t.expect(image.visible).notOk();
});

test('Test 3. Image disappears on small screens', async t => {
    await t.expect(image.visible).notOk();
});
