fixture `Fixture`
    .clientScripts({ module: 'lodash' });

test('Inject a Node.js module into a tested page', async t => {
    const result = await t.eval(() => _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));

    await t.expect(result).eql({ a: 1, b: 2 });
});
