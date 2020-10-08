import { ClientFunction, Selector } from 'testcafe';

fixture `Submit a Form`
    .page `https://devexpress.github.io/testcafe/example`;

test('Submit a Form', async t => {
    const submitForm = ClientFunction(() => {
        document.getElementById('main-form').requestSubmit();
    });

    await t.typeText('#developer-name', 'Peter Parker');

    await submitForm();

    await t.expect(Selector('#article-header').textContent).contains('Peter Parker');
});