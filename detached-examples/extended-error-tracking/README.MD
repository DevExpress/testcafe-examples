# Log Client-Side Errors

When a JavaScript error occurs on a tested web page, TestCafe stops test execution and posts an error message. Requests to foreign resources (e.g. third-party APIs) might cause unexpected errors that are not relevant to your test. In that case, you might want to filter those errors out to ignore them during the test.

This example demonstrates how to expand on TestCafe's standard error logging and filter client-side errors that happen during a test.

**Test Code**: [index.js](index.js)

The test page has 2 buttons, each throws an error with `.level` and `.url` custom properties when clicked:

||level|url|
|------|--------|-----|
|`Error 1`|`critical`|`https://my-domain.example.com`|
|`Error 2`|`warning`|`https://foreign-domain.example.com`|

These properties are later used to filter these errors.

During the test, both buttons receive clicks. To log the errors, [test.clientScripts](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/clientscripts.html) method [injects a client script](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/inject-client-scripts.html) into the page. This script records all the errors that happen during the test into an array.

That array is then checked with the [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) JavaScript method to find whether any `critical` errors have happened on the `https://my-domain.example.com` domain.

## Launch Configuration

When a JavaScript error occurs on a tested web page, TestCafe stops test execution. To prevent this, use the `-e` [CLI option](https://devexpress.github.io/testcafe/documentation/reference/command-line-interface.html#-e---skip-js-errors).

```sh
testcafe chrome index.js -e
```
