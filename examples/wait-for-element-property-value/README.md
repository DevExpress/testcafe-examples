# Wait Until an Element Property Has a Specific Value

**Test Code**: [index.js](index.js)

This example shows how to use an assertion to pause the test until an element's width is `100%`.

The tested page in `index.html` displays a progress bar that runs from `0%` to `100%`. The `index.js` file defines a [client function](https://devexpress.github.io/testcafe/documentation/test-api/obtaining-data-from-the-client/) that retrieves the bar's width. The test [asserts](https://devexpress.github.io/testcafe/documentation/test-api/assertions/) that this client function returns `100%`.

When this assertion is executed, TestCafe activates the [Smart Assertion Query Mechanism](https://devexpress.github.io/testcafe/documentation/test-api/assertions/#smart-assertion-query-mechanism) that waits until the assertion passes. When the element's width reaches `100%`, the test resumes. If the progress bar does not fill within the [timeout](https://devexpress.github.io/testcafe/documentation/test-api/assertions/#optionstimeout) (**30** seconds), the assertion fails.

