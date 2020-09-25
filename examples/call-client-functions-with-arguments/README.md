# Pass Arguments to Client Functions

**Test Code**: [call-client-functions-with-arguments.js](call-client-functions-with-arguments.js)

TestCafe's [client functions](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/obtain-client-side-info.html) allow you to execute code in the browser. Client functions are defined in test code but their body contains code they send to the browser and execute it there.

This example shows how to pass arguments to client functions.

The test file contains the `getLocationPart` client function that returns a [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location) property value. The property name is passed in the `locationPart` parameter.

The test runs against [the TestCafe example page](https://devexpress.github.io/testcafe/example/). During the test, the [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) assertions verify the location's [host](https://developer.mozilla.org/en-US/docs/Web/API/Location/host) and [pathname](https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname) properties (`devexpress.github.io` and `/testcafe/example/`, respectively).

## TestCafe API in This Example

* Test Structure:
  * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
  * [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
* Assertion and Evaluation:
  * [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
* Custom Scripts:
  * [ClientFunction](https://devexpress.github.io/testcafe/documentation/reference/test-api/clientfunction/) Object
