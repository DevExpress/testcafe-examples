# Change Element's Style

**Test Code**: [change-elements-style.js](change-elements-style.js)

This example shows how to modify an element's style from test code.

The [change-elements-style.js](change-elements-style.js) file contains two tests. These tests use [client functions](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/obtain-client-side-info.html) to run code in the browser.

During the `Hide an element` test, the `hidePopulateButton` client function sets the `#populate` button's  [style.display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) CSS property to `none`. Before the function is called, the [t.expect.ok](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html) assertion verifies that the button is visible. After `hidePopulateButton` is executed, the [t.expect.notOk](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/notok.html) assertion ensures that the button is no longer displayed.

In the `Remove header color` test, a client function modifies the `h1` header's [style.color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) to change its color to black. The [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html) assertions verify that the element's color has changed. To obtain the color value, the selector's [getStyleProperty](https://devexpress.github.io/testcafe/documentation/reference/test-api/domnodestate.html) method is used.

## TestCafe API Used

* Browser Code
  * [ClientFunction](https://devexpress.github.io/testcafe/documentation/reference/test-api/clientfunction/constructor.html) Constructor
* Test Structure
  * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
* Page Element Selection
  * [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/constructor.html) Constructor
  * [Selector.getStyleProperty](https://devexpress.github.io/testcafe/documentation/reference/test-api/domnodestate.html) Method
  * [Selector.visible](https://devexpress.github.io/testcafe/documentation/reference/test-api/domnodestate.html) Property
* Assertion
  * [t.expect.ok](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html) Method
  * [t.expect.notOk](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/notok.html) Method
  * [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
