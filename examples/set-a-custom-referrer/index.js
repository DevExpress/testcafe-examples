import { RequestLogger, RequestHook } from 'testcafe';

fixture `Set a Custom Referer`
    .page`http://example.com/`;

export class MyRequestHook extends RequestHook {
    constructor (requestFilterRules, responseEventConfigureOpts) {
        super(requestFilterRules, responseEventConfigureOpts);
    }
    async onRequest (event) {
        event.requestOptions.headers['referer'] =
            'http://my-modified-referer.com';
    }

    async onResponse () {

    }
}

const hook   = new MyRequestHook();
const logger = RequestLogger(
    ['https://devexpress.github.io/testcafe/example/', 'http://example.com/'],
    {
        logRequestHeaders: true,
    }
);

test
    .requestHooks([hook, logger])('Check the Referer Value', async t => {
        await t.navigateTo('https://devexpress.github.io/testcafe/example/');
        await t.expect(logger.contains(r => r.request.url === 'https://devexpress.github.io/testcafe/example/')).ok();
        await t.expect(logger.requests[0].request.headers['referer']).eql('http://my-modified-referer.com');
    });
