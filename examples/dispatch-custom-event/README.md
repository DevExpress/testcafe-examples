# Fire a Custom Event

**Test Source**: [index.js](index.js)

**Page Source**: [index.html](index.html)

This example shows how to fire DOM [events](https://developer.mozilla.org/en-US/docs/Web/API/Event) with TestCafe.

We use the `t.dispatchEvent` method to fire a `touchstart` event.

The page displays the following information when we trigger a [touchstart event](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart):

* the event's constructor
* whether the event is [cancelable](https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable)
* whether the event [bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles)  

TestCafe invokes the [CustomEvent Constructor](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) to create events, unless the event in question is a [Mouse event](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html#mouse-events), a [Keyboard event](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html#keyboard-events), an [Input event](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html#input-events), a [Focus event](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html#focus-events) or a [Pointer event](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html#pointer-events).

Include the `eventConstructor` option to use the [TouchEvent Constructor](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/TouchEvent) instead.```


## TestCafe API methods Used in This Example

* Test Structure:
  * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
  * [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
* Element Identification and Actions:
  * [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
  * [t.dispatchEvent](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/dispatchevent.html) Method
* Assertion and Evaluation:
  * [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
