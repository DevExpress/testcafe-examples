# Fire a Custom Event

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

This example shows how to fire [events](https://developer.mozilla.org/en-US/docs/Web/API/Event) on the webpage with TestCafe.

During the test the `t.dispatchEvent` fires a `touchstart` event on the target.

When a [touchstart event](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) is triggered on a target item, the page dislays the event's information:

* event's constructor
* whether the event is [cancelable](https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable)
* whether the event [bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles)  

TestCafe invokes the [CustomEvent Constructor](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) for any event that is neither a [Mouse](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html#mouse-events), a [Keyboard](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html#keyboard-events), an [Input](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html#input-events), a [Focus](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html#focus-events) nor a [Pointer](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html#pointer-events) event.

To tell TestCafe to use the [TouchEvent Constructor](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/TouchEvent), the `eventConstructor` property is passed to the method's `options`.

When `touchstart` fires, the `t.expect.eql` method checks the values displayed on the page.

## TestCafe API Used in This Example

* Test Structure:
  * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
  * [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
* Element Identification and Actions:
  * [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
  * [t.dispatchEvent](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html) Method
* Assertion and Evaluation:
  * [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
