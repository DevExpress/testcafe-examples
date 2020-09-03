# Extended Client-Side Error Tracking

When a JavaScript error occurs on a tested web page, TestCafe stops test execution and posts an error message to the console. Third-party code execution (e.g. controls, logging and analytics services) might cause unexpected errors that are not relevant to the tested app. You might want to filter those errors out to ignore them during the test.

This example demonstrates how to extend TestCafe's standard error logging and filter client-side errors that happen during a test.

**Test Code**: [index.js](index.js)

The test page has 2 buttons (`Error 1` and `Error 2`), each throws an error with `.level` and `.url` custom properties when clicked. These properties are later used to filter the errors and have the following values:

|Button|.level|.url|
|------|--------|-----|
|`Error 1`|`critical`|`https://my-domain.example.com`|
|`Error 2`|`warning`|`https://foreign-domain.example.com`|

During the test, both buttons receive clicks. To log the errors, [test.clientScripts](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/clientscripts.html) method injects a client script into the page. This script collects all the errors that happen during the test and records them into an array.

> Read up on how to include and use custom scripts in your tests: [Inject Client Scripts](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/inject-client-scripts.html)

The array is then checked with the [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) JavaScript method to find whether any `critical` errors have happened on the tested web page. If such errors have occurred, the test fails, otherwise, it passes.

## Launch Configuration

When a JavaScript error occurs on a tested web page, TestCafe stops test execution. To prevent this, use the `-e` [CLI option](https://devexpress.github.io/testcafe/documentation/reference/command-line-interface.html#-e---skip-js-errors).

To launch this example only, use the following command:

```sh
npm run extended-error-tracking;
```

## TestCafe Functions and Methods Employed in this Example

1. Test Structure:

   - [`fixture` Function](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/fixture.html)
   - [`fixture.page` Method](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html)
   - [`test` Function](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html)

2. Actions:

   - [`t.click` Method](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/click.html)

3. Assertion and Evaluation:

   - [`t.eval` Method](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/eval.html)
   - [`t.expect.notOk` Method](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/notok.html)

4. Custom Scripts:

   - [`Test.clientScripts` Method](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/clientscripts.html)

5. Command Line Interface Options:

   - [`-e`](https://devexpress.github.io/testcafe/documentation/reference/command-line-interface.html#-e---skip-js-errors)
