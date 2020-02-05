import { Selector } from 'testcafe';
import { enterName, typeComment, submitForm } from './helper.js';

fixture `Helpers`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Fill form', async t => {
    const name = 'John Heart';

    await enterName(name);
    await typeComment('Here is what I think...');
    await submitForm();
    await t.expect(Selector('#article-header').textContent).contains(name);
});
