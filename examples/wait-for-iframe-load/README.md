# Wait For Iframe Loading

**Test Code**: [wait-for-iframe-load.js](wait-for-iframe-load.js)

TestCafe implements [wait mechanisms](https://devexpress.github.io/testcafe/documentation/guides/concepts/built-in-wait-mechanisms.html) that automatically suspend the test until all required page elements are loaded and ready for interaction. These mechanisms apply to page loads, animations, XHR requests, iframe initializations, etc. TestCafe waits until the target element is ready, or reports an error if this does not happen within a timeout.

This example shows how to allow more time for an `iframe` to load if the default timeout is not enough.

The test runs against a [DevExpress demo page](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/jQuery/Light/) where the demo content is organized in an `iframe`. During the test, a [Selector](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/select-page-elements.html) for this `iframe` is created. The [timeout](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/constructor.html#optionstimeout) passed in the [Selector constructor](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/constructor.html) options is set to `60` seconds so that the `iframe` has one minute to initialize. Then, the [t.switchToIframe](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/switchtoiframe.html) method [switches the browsing context](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/interact-with-the-page.html#work-with-iframes) to the iframe. This prompts TestCafe to wait until the iframe content is loaded.

Note that if you add more actions after [t.switchToIframe](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/switchtoiframe.html), they are executed against the iframe content.

## TestCafe API Used

* Page Element Selection
  * [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/constructor.html) Constructor
* Iframes
  * [t.switchToIframe](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/switchtoiframe.html) Method