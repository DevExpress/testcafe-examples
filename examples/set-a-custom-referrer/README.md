# Set a Custom Referrer

**Test Code**: [index.js](index.js)

**Tested Page**: [TestCafe Example Page](https://devexpress.github.io/testcafe/example/)

The [HTTP referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) (otherwise known as referer) is a request header that lets a webpage know where the user has navigated from.

This example shows how to set a custom referrer during tests.

Before the test begins a request hook and a request logger are introduced. The hook overwrites the requests's 'Referer' header with a desired value.

The test starts on a dummy page and navigates to another page with a `t.navigateTo` method. A request logger captures the corresponding requests. The `t.expect.eql` method checks the header value.

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
