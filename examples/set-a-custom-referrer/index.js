import { RequestLogger, RequestHook } from 'testcafe';

fixture `Set a Custom Referer`
    .page`http://example.com/`;

export class MyRequestHook extends RequestHook {
    constructor(requestFilterRules, responseEventConfigureOpts) {
        super(requestFilterRules, responseEventConfigureOpts);
    }
    async onRequest(event) {
        event.requestOptions.headers['Referer'] =
            'http://my-modified-referer.com';
    }

    async onResponse(event) {

    }
}

const hook   = new MyRequestHook();
const logger = RequestLogger(
    ["https://devexpress.github.io/testcafe/example/", "http://example.com/"],
    {
        logRequestHeaders: true,
    }
);

test
    .requestHooks([hook, logger])
    ('Check the Referer Value', async t => {
        await t
            .navigateTo('https://devexpress.github.io/testcafe/example/')
            .expect(logger.contains(r => r.request.url === 'https://devexpress.github.io/testcafe/example/')).ok()
            .expect(logger.requests[0].request.headers['Referer']).eql('http://my-modified-referer.com');
    });
