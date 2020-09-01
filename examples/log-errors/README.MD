# Log Client-Side Errors

This example demonstrates how to log client-side errors that happen during test and use these errors is an assertion.

**Test Code**: [index.js](index.js)

The test page has `Warning` and `Error` buttons, each throw an error with a corresponding severity when clicked. These errors have custom `.severity` and `.url` properties, which are later used to filter these errors.

To log errors that occur during the test, [test.clientScripts](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/clientscripts.html) method [injects a client script](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/inject-client-scripts.html) into the page. This script populates an array with all the errors that happen during test run.

During the test, both buttons receive clicks. List of errors is then checked for critical errors with the [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) JavaScript method.

When a JavaScript error occurs on a tested web page, TestCafe stops test execution. To prevent this, use the `-e` [CLI option](https://devexpress.github.io/testcafe/documentation/reference/command-line-interface.html#-e---skip-js-errors).

```sh
testcafe chrome index.js -e
```
