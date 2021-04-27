const { Selector } = require('testcafe');

const createStageGenerator = require('./create-stage-generator');
const stage = createStageGenerator('An example of synchronizing two tests', 'First user');

fixture`Second`
    .page('http://localhost:3000');

const input = Selector('input');
const h1    = Selector('h1');

// await stage('Run test');

test('test', async t => {
    await t.wait(6000).expect(input.exists).ok();

    // await stage('Choose a color and send it');

    await t
        .typeText(input, 'red')
        .pressKey('enter')
        .expect(h1.innerText).eql('Not ok!');
});
