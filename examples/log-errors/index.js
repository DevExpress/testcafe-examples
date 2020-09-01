fixture('Log errors')
    .page('./index.html')
    
test('Check for critical errors', async (t) => {
   
    await t
            .click("#err-btn")
            .click("#warn-btn");

    const errors = await t.eval(() => window.unhandledErrors);
    const foundCritical = errors.some(error => error.level === 'critical' && error.url === 'https://sub-domain.example.com');
    
    await t
            .expect(foundCritical).notOk("Critical errors occurred during test");         
})
.clientScripts('./scripts/log-errors.js');
