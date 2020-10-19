import { RequestLogger, RequestHook } from "testcafe";

fixture `Set a Custom Referer`
    .page`http://example.com/`;

export class MyRequestHook extends RequestHook {
    constructor(requestFilterRules, responseEventConfigureOpts) {
        super(requestFilterRules, responseEventConfigureOpts);
    }
    async onRequest(event) {
        event.requestOptions.headers["Referer"] =
            "http://my-modified-referer.com";
    }
    async onResponse(event) {

    }
}

const hook = new MyRequestHook();
const logger = RequestLogger("http://example.com/", {
    logRequestHeaders: true,
});

test.requestHooks(hook, logger)("Check the Referer Value", async t => {
    const requestHeaders = logger.requests[0].request.headers

    await t
        .navigateTo("https://devexpress.github.io/testcafe/example/")
        .expect(requestHeaders["Referer"])
        .eql("http://my-modified-referer.com");
});
