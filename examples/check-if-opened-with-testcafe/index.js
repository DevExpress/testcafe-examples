import { Selector } from 'testcafe';

fixture `Check to ensure that the page was opened with TestCafe`
    .page('./index.html')

test('Check to ensure that the page was opened with TestCafe', async t => {
    await t.expect(Selector('#main').innerText).eql('The page is opened with TestCafe: yes');
});
