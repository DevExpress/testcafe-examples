fixture`The metadata of this fixture satisfies both exclusion requirements. TestCafe skips this fixture.`
    .meta({ severity: 'low', repeatDaily: false })
    .page`https://devexpress.github.io/testcafe/example`;

test
    .meta({ device: 'desktop', skip: false })('The metadata of this test does not satisfy either exclusion requirement. The test does not run because TestCafe skips the fixture', async t => {
        await t.wait(1000);
    });

fixture`The metadata of this fixture satisfies one exclusion requirement. TestCafe skips this fixture.`
    .meta({ severity: 'low', repeatDaily: true })
    .page`https://devexpress.github.io/testcafe/example`;

test
    .meta({ device: 'desktop', skip: false })('The metadata of this test does not satisfy either exclusion requirement. The test does not run because TestCafe skips the fixture', async t => {
        await t.wait(1000);
    });

fixture`The metadata of this fixture doesn't satisfy either exclusion requirement. TestCafe runs this fixture.`
    .meta({ severity: 'high', repeatDaily: true })
    .page`https://devexpress.github.io/testcafe/example`;

test
    .meta({ device: 'mobile', skip: true })('The metadata of this test satisfies both exclusion requirements. TestCafe skips this test.', async t => {
        await t.wait(1000);
    });

test
    .meta({ device: 'mobile', skip: false })('The metadata of this test satisfies one exclusion requirement. TestCafe skips this test.', async () => {
    });

test
    .meta({ device: 'desktop', skip: false })("The metadata of this test doesn't satisfy either exclusion requirement. TestCafe runs this test.", async t => {
        await t.wait(1000);
    });