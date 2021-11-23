const { Selector } = require('testcafe');

const { getScenario } = require('..');

const scenario = getScenario('An example of synchronizing multiple tests');
const stage    = scenario.initUser('Third user');

fixture`Third fixture`
    .page('http://localhost:3000');

const input = Selector('input');
const h1    = Selector('h1');

test('test', async t => {
    await stage('Check page load');

    await t.expect(input.exists).ok();

    await stage('Type a color and send it');

    await t
        .typeText(input, 'red')
        .pressKey('enter');

    await stage('Check result');

    await t.expect(h1.innerText).eql('Not ok!');

    await stage('End');
});
