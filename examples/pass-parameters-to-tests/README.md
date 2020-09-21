# Pass Parameters to Tests

**Test Code**: [index.js](index.js)

This example demonstrates how to pass parameters to TestCafe tests. You can obtain the parameter values from the following sources:

* a JSON configuration file
* a JavaScript object
* an environment variable

Before test execution, two parameters are loaded from the `.json` and `.js` files with an [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement. The third parameter is set as an environment variable with the [process.env](https://nodejs.org/api/process.html#process_process_env) property.

The `test.page` method sets the initial page for each test. The page URL is passed as its parameter. Then, a `clientFunction` obtains the [File URL](https://nodejs.org/api/url.html#url_url_pathtofileurl_path) of the current page, and the `t.expect.eql` method compares this value to the full path calculated based on the specified parameter.

## TestCafe Functions and Methods Used in This Example

1. Test Structure:
    * [Test.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/page.html) Method
    * [fixture](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/fixture.html) Function
2. Assertion and Evaluation:
    * [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
3. Custom Scripts:
    * [ClientFunction](https://devexpress.github.io/testcafe/documentation/reference/test-api/clientfunction/) Object
