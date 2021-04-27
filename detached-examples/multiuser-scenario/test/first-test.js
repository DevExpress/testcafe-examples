const { Selector } = require('testcafe');
console.log(__filename)
const createStageGenerator = require('./create-stage-generator');

fixture`First user`
    .page('http://localhost:3000');

const input = Selector('input');
const h1    = Selector('h1');

test('test', async t => {
    const stage = await createStageGenerator('An example of synchronizing two tests', 'First user');

    await t.expect(input.exists).ok();

    await stage('Choose a color and send it');

    await t
        .typeText(input, 'red')
        .pressKey('enter')
        .expect(h1.innerText).eql('Ok!');

    await stage('End');
});
