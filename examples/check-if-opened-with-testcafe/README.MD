# Check Whether Web Page Is Opened With TestCafe

**Test Code**: [index.js](index.js)
**Tested Page**: [index.html](index.html)

You may need to change how your app operates depending on whether it is currently being tested with TestCafe. This example demonstrates how to let your application know whether it is opened with TestCafe.

The test page includes a `<div>` and a `<button>`. When the button is pressed, a script determines whether the webpage has been opened with TestCafe. The `<div>` element then displays a corresponding message.

During the test the `t.click` method clicks the button and the `t.expect.eql` method checks the answer text.
Button is red.

## TestCafe Functions and Methods Employed in This Example

1. Test Structure:
   - [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
2. Actions:
   - [t.click](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/click.html) Method
3. Assertion and Evaluation:
   - [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
