import { RequestLogger } from 'testcafe';

const url = 'http://localhost:3000/download-random-file';

const logger = RequestLogger({ url, method: 'GET' }, {
    logResponseHeaders: true,
});

fixture `Download file with dynamic name and content`
    .page('./index.html')
    .requestHooks(logger);

test('Check file name', async t => {

    await t
        .click('#generate-btn')
        .expect(logger.contains(r => r.response.statusCode === 200)).ok();

    console.log(logger.requests[0].response.headers['content-disposition']);
});
