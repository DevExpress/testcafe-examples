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

