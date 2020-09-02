import { RequestLogger } from 'testcafe';

const url = 'http://localhost:3000/download-file';

const logger = RequestLogger({ url, method: 'GET' }, {
    logResponseHeaders: true,
    logResponseBody: true,
    stringifyResponseBody: true
});

fixture `Download file`
    .page('./index.html')
    .requestHooks(logger);

test('Check file name', async t => {
    const fileNameRegEx = /attachment; filename=.*.txt/
    
    await t
        .click('#download-btn')
        .expect(logger.contains( r => r.response.statusCode === 200 && 
                                fileNameRegEx.test(logger.requests[0].response.headers['content-disposition']) 
                                && logger.requests[0].response.body === 'Test content'
        )).ok();

    console.log(logger.requests[0].response.headers['content-disposition']);
    console.log(logger.requests[0].response.body);
});
