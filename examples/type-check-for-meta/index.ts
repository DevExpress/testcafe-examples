import { Selector } from 'testcafe';
const createTestCafe = require("testcafe");

fixture `Meta strict type check`
    .page('https://devexpress.github.io/testcafe/example/');

type exampleMeta = {
    target: 'mobile' | 'desktop';
    env: 'production' | 'staging';
}

const mobileProductionMeta: exampleMeta = { target: 'mobile', env: 'production' };
const desktopStagingMeta: exampleMeta = { target: 'desktop', env: 'staging' };

test('TestOne', async () => {}).meta(mobileProductionMeta);
test('TestTwo', async () => {}).meta(desktopStagingMeta);

// const testcafe = await createTestCafe('localhost', 0, 0);
// const runner   = testcafe.createRunner();


// await runner
//     .browsers('chrome')
//     .src('./index.ts')
//     .filter((testName, fixtureName, fixturePath, testMeta, fixtureMeta) => {
//         return fixtureMeta.target === 'mobile' && fixtureMeta.env === 'production';
//     })
//     .run();