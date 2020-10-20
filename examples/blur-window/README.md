# Simulate the Web Page Losing Focus

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

This example demonstrates how to simulate the web page losing focus.

The tested page includes a script. When the user switches to another tab or minimizes the main window, the script logs a message to the console.

Before the test begins, a `ClientFunction` is declared. When called, this function employs the [EventTarget.dispatchEvent](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent) method to dispatch a [blur Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) at the main window.

During the test, the `t.expect.ok` method asserts that the client function has fired.

## TestCafe Functions and Methods Used in This Example

1. Test Structure:
    - [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
    - [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
2. Assertion and Evaluation:
    - [t.expect.ok](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html) Method
3. Custom Scripts:
    - [ClientFunction](https://devexpress.github.io/testcafe/documentation/reference/test-api/clientfunction/) Object
