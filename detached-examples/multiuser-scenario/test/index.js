const createTestCafe = require('testcafe');

const scenario = 'An example of synchronizing two tests';

async function runTest (port1, port2, fileName, browsers) {
    const testcafe = await createTestCafe('localhost', port1, port2);
    const runner   = testcafe.createRunner();

    await runner
        .src(fileName)
        .browsers(browsers)
        .run();

    return testcafe.close();
}

require('../index').then(async () => {

    await Promise.all([
        runTest(1337, 1338, 'test/first-test.js', 'firefox'),
        runTest(1339, 1340, 'test/second-test.js', 'chrome --incognito')
    ]);

    process.exit();
});