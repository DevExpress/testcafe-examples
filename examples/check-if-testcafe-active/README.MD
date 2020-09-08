# Check Whether TestCafe Is Loaded

Test Code: index.js
Tested Page: index.html

If you want to change how your app operates (e.g. choose whether it should expose some data) depending on whether it is currently being tested with TestCafe. This example demonstrates how to let your application know whether TestCafe is loaded and running in the current window.

The test page includes a `<div>` and a `<button>`. When the button is pressed, a script determines whether TestCafe is currently loaded on the page. The `<div>` element then displays a corresponding message.

|TestCafe loaded?|Message text                            |
|----------------|----------------------------------------|
|Yes             |`TestCafe is currently loaded`          |
|No              |`TestCafe is not running in this window`|

During the test the `t.click` method clicks the button and the `t.expect.eql` method checks the answer text.

## TestCafe Functions and Methods Employed in This Example

1. Test Structure:
   - [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
2. Actions:
   - [t.click](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/click.html) Method
3. Assertion and Evaluation:
   - [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
