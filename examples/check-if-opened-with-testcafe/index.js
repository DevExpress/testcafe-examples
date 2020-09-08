import { Selector } from 'testcafe';

fixture `Check that the page opened with TestCafe`
    .page('./index.html')

test('Check that the page opened with TestCafe', async t => {
    await t.expect(Selector('#main').innerText).eql('The page is opened with TestCafe: yes');
});
