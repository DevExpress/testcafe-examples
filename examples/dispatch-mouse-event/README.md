# Create Data-Driven Tests

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

This example shows how to fire [events](https://developer.mozilla.org/en-US/docs/Web/API/Event) on the webpage with TestCafe.

The tested page includes a `button` and a counter. Each second that the left click is held on the button the counter increments by one.

During the test the `t.dispatchEvent` fires a [mousedown event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event) on the button and then the [mouseup event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event) in five seconds. This simulates a 5 second-long left click on the button.

When `mouseup` fires (the left click is released), the `t.expect.eql` method checks the counter value.

## TestCafe API Used in This Example

* Test Structure:
  * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
  * [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
* Element Identification and Actions:
  * [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
  * [t.dispatchEvent](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html) Method
* Assertion and Evaluation:
  * [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
