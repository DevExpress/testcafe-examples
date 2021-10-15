# Ignore 'ResizeObserver loop limit exceeded' error

**Test Source**: [index.js](index.js)

**Page Source**: [index.html](index.html)

These examples show how to ignore the '[ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) loop limit exceeded' error into tested webpages with client script injection.

This error doesn't relate to TestCafe and means that ResizeObserver was not able to deliver all observations within a single animation frame. It is benign (your site will not break).

## TestCafe API Methods Used in This Example

* Test Structure:
    * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
    * [Fixture.clientScripts](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/clientscripts.html) Method
    * [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
* Element Identification and Actions:
    * [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
    * [t.typeText](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/typetext.html) Method
