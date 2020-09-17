# Pass Parameters to Tests

**Test Code**: [index.js](index.js)

This example demonstrates how to pass parameters to TestCafe tests from the following sources:

* a JSON configuration file
* a JavaScript object
* an environment variable

Before the tests, the `.json` and `.js` configuration files are imported with JavaScript [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) syntax. The environment variable is declared with the [process.env](https://nodejs.org/api/process.html#process_process_env) property. These values are then available inside tests.

During each of the tests, the `test.page` method reads one of these values to decide the page where the test starts. A `clientFunction` that is declared before the tests begin obtains the full URL of the current page. The `t.expect.eql` method compares this value to the full path to the file that the configuration file or the environment variable specified.

## TestCafe Functions and Methods Used in This Example

1. Test Structure:
    * [Test.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/page.html) Method
    * [fixture](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/fixture.html) Function
2. Assertion and Evaluation:
    * [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
3. Custom Scripts:
    * [ClientFunction](https://devexpress.github.io/testcafe/documentation/reference/test-api/clientfunction/) Object
