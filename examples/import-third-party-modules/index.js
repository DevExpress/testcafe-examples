import { Selector } from 'testcafe';
import { nanoid } from 'nanoid';

fixture `Import third-party modules`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Enter random user name', async t => {
    const randomName = 'testuser_' + nanoid();
    const nameInput  = Selector('#developer-name');

    await t
        .typeText(nameInput, randomName)
        .expect(nameInput.value).eql(randomName);
});
