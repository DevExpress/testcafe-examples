import { Selector } from 'testcafe';

fixture `Fixture`
    .page('https://devexpress.github.io/testcafe/example/');

test('Reload the tested page', async t => {
    await t.typeText('#developer-name', 'Peter Parker');

    await t.eval(() => location.reload(true));

    await t
        .wait(3000)
        .expect(Selector('#developer-name').value).eql('');
});
