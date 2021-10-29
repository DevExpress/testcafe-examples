# Ignore 'ResizeObserver loop limit exceeded' Error

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

This example shows how to ignore the '[ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) loop limit exceeded' error in a web page with the [injected client script](https://testcafe.io/documentation/402843/guides/advanced-guides/inject-client-scripts).

This error does not relate to TestCafe and means that the ResizeObserver failed to observe size changes in an animation frame.

## TestCafe API in This Example

* Test Structure:
    * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) method
    * [Fixture.clientScripts](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/clientscripts.html) method
    * [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) function
* Element Identification and Actions:
    * [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) object
    * [t.typeText](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/typetext.html) method
