const createTestCafe = require('testcafe');

async function runTests (src) {
    const testCafe = await createTestCafe();

    const nFailed = await testCafe.createRunner()
        .src(src)
        .browsers('chrome:headless')
        .run();

    await testCafe.close();

    return nFailed;
}

module.exports = { runTests };
