import { Selector } from 'testcafe';

fixture `Check if TestCafe active`
    .page('./index.html')

test('Check if TestCafe loaded', async t => {
    const answer = Selector('#answer');
    await t
        .click('#button')
        .expect(answer.innerText).eql('TestCafe is currently loaded');
});
