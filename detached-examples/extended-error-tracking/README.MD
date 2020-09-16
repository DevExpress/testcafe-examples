# Extended Client-Side Error Tracking

When a JavaScript error occurs on a tested web page, TestCafe stops test execution and posts an error message. Third-party code execution (for example, controls, logging, and analytics services) can cause unexpected errors that are not related to the tested app. You can filter these errors to ignore them during the test.

The following example demonstrates how to extend TestCafe's standard error tracking and how to filter client-side errors that occur during a test.

**Test Code**: [index.js](index.js)

The test page has two buttons (`Error 1` and `Error 2`). When clicked, these buttons throw an error with `.level` and `.url` custom properties that are used to filter errors and have the following values:

|Button|.level|.url|
|------|--------|-----|
|`Error 1`|`critical`|`https://my-domain.example.com`|
|`Error 2`|`warning`|`https://foreign-domain.example.com`|

During the test, both buttons are clicked. To capture the errors, the [test.clientScripts](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/clientscripts.html) method injects a client script into the page. This script collects all the errors that occur during the test and records them into an array.

> Read up on how to include and use custom scripts in your tests: [Inject Client Scripts](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/inject-client-scripts.html)

The array is then checked with the [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) JavaScript method to find out whether any `critical` errors have occurred on the tested web page. If such errors have occurred, then the test passes, otherwise, it fails.

## Launch Configuration

To launch only this example, use the following command:

```sh
npm run extended-error-tracking
```

> When a JavaScript error occurs on a tested web page, TestCafe stops test execution. To prevent this, the `-e` [CLI option](https://devexpress.github.io/testcafe/documentation/reference/command-line-interface.html#-e---skip-js-errors) is used in this example.

## TestCafe Functions and Methods Used in This Example

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
