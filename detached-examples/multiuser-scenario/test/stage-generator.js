const createTestCafe = require('testcafe');

const users = new Map();

class User {
    constructor (name, fileName, browser) {
        this.name     = name;
        this.fileName = fileName;
        this.browser  = browser;

        this.promiseOfInit = new Promise(resolve => {
            this.confirmCurrentStep = resolve;
        });

        this.expectedStageName = void 0;
        this.runExpectedStage  = null;

        this._runTest();
    }

    async _runTest () {
        const testcafe = await createTestCafe('localhost', 0, 0);
        const runner   = testcafe.createRunner();

        await runner
            .src(this.fileName)
            .browsers(this.browser)
            .run();

        await testcafe.close();
    }

    async runStage (stageName) {
        if (stageName !== this.expectedStageName)
            throw new Error(`Another stage was expected:
                expected: ${this.expectedStageName}
                trying run: ${stageName}`);

        this.runExpectedStage();

        return new Promise(resolve => {
            this.confirmCurrentStep = resolve;
        });
    }
}

function createUser (name, fileName, browser) {
    const user = new User(name, fileName, browser);

    users.set(name, user);

    return user.promiseOfInit;
}

function initUser(name) {
    const user = users.get(name);

    if (!user)
        throw new Error(`The user named '${name}' does not exist`);

    return function stage (stageName) {
        user.confirmCurrentStep(user);

        user.expectedStageName = stageName;

        return new Promise(resolve => {
            user.runExpectedStage = resolve;
        });
    }
}

module.exports = { createUser, initUser };