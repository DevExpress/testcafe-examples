import { ClientFunction } from 'testcafe';

fixture `Fixture`
    .clientScripts({ module: 'lodash'});

test('Inject module as a custom client script', async t => {
    const result = await t.eval(() => _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));

    await t.expect(result).eql({ a: 1, b: 2 });
});
