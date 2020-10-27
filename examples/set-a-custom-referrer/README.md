# Set a Custom Referrer

**Test Code**: [index.js](index.js)

**Tested Page**: [TestCafe Example Page](https://devexpress.github.io/testcafe/example/)

The [HTTP referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) (also known as referer) is a request header that indicates from where the user navigated.

This example shows how to set a custom referrer for the specified requests during tests.

Before the test begins, a request hook and a request logger are created. When the browser sends a request, the hook overwrites its 'Referer' header with the specified value.

The test starts on a dummy page and navigates to another page with the `t.navigateTo` method. The request logger records the requests sent during the test. The `t.expect.eql` method checks the header value to verify that the referrer was overwritten.

## TestCafe API Used in This Example

* Test Structure:
  * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
  * [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
* Element Identification and Actions:
  * [t.navigateTo](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/navigateto.html) Method
* Assertion and Evaluation:
  * [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
* Request Handlers:
  * [Test.requestHooks](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/requesthooks.html) Method
  * [RequestHook](https://devexpress.github.io/testcafe/documentation/reference/test-api/requesthook/constructor.html) Constructor
  * [RequestLogger](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/constructor.html) Constructor
