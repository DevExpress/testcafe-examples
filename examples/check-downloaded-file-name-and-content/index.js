import { RequestLogger } from 'testcafe';

const url = 'http://localhost:3000/download-file';

const logger = RequestLogger({ url, method: 'GET' }, {
    logResponseHeaders:    true,
    logResponseBody:       true,
    stringifyResponseBody: true
});

fixture `Download file`
    .page('./index.html')
    .requestHooks(logger);

test('Check file name and content', async t => {
    const fileNameRegEx = /attachment; filename=.*.txt/;
    
    await t
        .click('#download-btn')
        .expect(logger.contains(r => {
            if (r.response.statusCode !== 200)
                return false;
           
            const requestInfo = logger.requests[0];
           
            if (!requestInfo)
                return false;
      
            const downloadedFileName = requestInfo.response.headers['content-disposition'];
            
            if (!downloadedFileName)
                false;
      
            if (!fileNameRegEx.test(downloadedFileName))
                return false;
            
            const downloadedFileContent = logger.requests[0].response.body;
      
            return downloadedFileContent === 'Test content';
        })).ok();
});
 