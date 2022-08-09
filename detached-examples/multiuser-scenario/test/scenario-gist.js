const path = require('path');

const { Scenario } = require('..');

module.exports = async () => {
    const scenario = new Scenario('An example of synchronizing multiple tests');

    const [user1, user2, user3] = await Promise.all([
        scenario.createUser('First user', path.join(__dirname, 'first-user-test.js'), 'chrome:headless'),
        scenario.createUser('Second user', path.join(__dirname, 'second-user-test.js'), 'chrome:headless --incognito'),
        scenario.createUser('Third user', path.join(__dirname, 'third-user-test.js'), 'chrome:headless --incognito')
    ]);

    await Promise.all([
        user1.runStage('Check page load'),
        user2.runStage('Check page load'),
        user3.runStage('Check page load')
    ]);

    await user1.runStage('Type a color and send it');
    await user1.runStage('Check result');

    await user2.runStage('Type a color and send it');
    await user2.runStage('Check result');

    await user3.runStage('Type a color and send it');
    await user3.runStage('Check result');

    user1.runStage('End');
    user2.runStage('End');
    user3.runStage('End');
};
