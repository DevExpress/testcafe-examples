fixture('Log errors')
    .page('./index.html');
    
test('Extended error tracking', async t => {
    await t
        .click('#err1-btn')
        .click('#err2-btn');

    const errors        = await t.eval(() => window.capturedErrors);
    const foundCritical = errors.some(error => error.level === 'critical' && error.url === 'https://my-domain.example.com');
    
    // Use the `notOk` method to fail the test.
    // We use the `ok` method to keep all tests green.
    await t.expect(foundCritical).ok('Critical errors occurred during test');         
})
    .clientScripts('./setup-collecting-errors.js');
