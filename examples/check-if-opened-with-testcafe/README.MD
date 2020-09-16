# Check Whether Web Page Is Opened With TestCafe

**Test Code**: [index.js](index.js)
**Tested Page**: [index.html](index.html)

When TestCafe runs, it exposes multiple variables with internal TestCafe data to the global object. Your application can check if any of those variables are present and conclude whether it is opened with TestCafe.

This example demonstrates how to let your application know whether it is opened with TestCafe.

The test page includes a `<div>` with a `<span>`. When the page is opened, a script determines whether the page was opened with TestCafe. The `<span>` element then displays `yes` or `no` accordingly.

During the test, the `t.expect.eql` method checks the `<div>` text.

## TestCafe Functions and Methods Used in This Example

1. Test Structure:
   - [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
2. Assertion and Evaluation:
   - [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
