import { Helper } from './helper';
    
fixture`Chain Helper Methods`;

const helper = new Helper();

test('Fill form', async () => {
    await helper
        .navigateTo('http://devexpress.github.io/testcafe/example/')
        .typeName('John')
        .submit()
        .checkName('John');
});
