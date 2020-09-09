import { RequestLogger } from 'testcafe';

const logger = RequestLogger({url: 'http://localhost:3000/upload', method: 'POST'});

fixture `My fixture`
    .page `./index.html`
    .requestHooks(logger);

test('Select files to upload', async t => {
    await t
        .setFilesToUpload('#upload-input', ['./uploads/text-file.txt', './uploads/text-file2.txt'])
        .click('#btn');
    await t
        .expect(logger.requests[0].response.statusCode).eql(200);
});

test('Upload nothing', async t => {
    await t
        .click('#btn');
    await t
        .expect(logger.requests[0].response.statusCode).notEql(200);
});