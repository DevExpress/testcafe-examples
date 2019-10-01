## Page Manipulation

TestCafe allows you to [execute custom code](https://devexpress.github.io/testcafe/documentation/test-api/obtaining-data-from-the-client/) on tested pages. This code can use the DOM or browser API to obtain data or manipulate the page state.

## Reload the tested page

**Test Code**: [reload-page.js](reload-page.js)

If you are testing a page that does not update automatically when server-side changes occur, you may need to reload it in code to reflect these changes.

This example uses the [t.eval](https://devexpress.github.io/testcafe/documentation/test-api/obtaining-data-from-the-client/#one-time-client-code-execution) method to execute [Location.reload](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload) in the browser.
