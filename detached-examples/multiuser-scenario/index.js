const createTestCafe = require('testcafe');

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

        testcafe.close();
    }

    async runStage (stageName) {
        if (stageName !== this.expectedStageName) {
            throw new Error(`Another stage was expected:
                expected: ${this.expectedStageName}
                trying run: ${stageName}`);
        }

        this.runExpectedStage();

        return new Promise(resolve => {
            this.confirmCurrentStep = resolve;
        });
    }
}

global.scenarios = global.scenarios || new Map();

class Scenario {
    constructor (description) {
        global.scenarios.set(description, this);

        this.users = new Map();
    }

    createUser (name, fileName, browser) {
        const user = new User(name, fileName, browser);

        this.users.set(name, user);

        return user.promiseOfInit;
    }

    initUser (name) {
        const user = this.users.get(name);

        if (!user)
            throw new Error(`The user named '${name}' does not exist`);

        return function stage (stageName) {
            user.confirmCurrentStep(user);

            user.expectedStageName = stageName;

            return new Promise(resolve => {
                user.runExpectedStage = resolve;
            });
        };
    }
}

function getScenario (description) {
    const scenario = global.scenarios.get(description);

    if (scenario)
        return scenario;

    throw new Error(`The scenario '${description}' does not exist`);
}

module.exports = { Scenario, getScenario };
