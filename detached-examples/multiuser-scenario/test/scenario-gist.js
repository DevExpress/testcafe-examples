const { Scenario } = require('..');

module.exports = async () => {
    const scenario = new Scenario('An example of synchronizing multiple tests');

    const [user1, user2] = await Promise.all([
        scenario.createUser('First user', 'test/first-user-test.js', 'chrome'),
        scenario.createUser('Second user', 'test/second-user-test.js', 'chrome --incognito')
    ]);

    await Promise.all([
        user1.runStage('Check page load'),
        user2.runStage('Check page load')
    ]);

    await user1.runStage('Type a color and send it');
    await user1.runStage('Check result');

    await user2.runStage('Type a color and send it');
    await user2.runStage('Check result');

    user1.runStage('End');
    user2.runStage('End');
};
