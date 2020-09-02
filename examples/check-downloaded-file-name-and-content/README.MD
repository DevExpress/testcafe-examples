# Check the Name of a Downloaded File

**Test Code**: [index.js](index.js)

This example shows how to obtain the name and the content of a file downloaded during a test.

During the test, a click on a link starts a file download. To verify download success and obtain the name and the content of the file, a [RequestLogger](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/) is attached to the test with the [t.requestHooks](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/requesthooks.html) method.

To verify success of a download, a response status code is checked with the [t.expect.ok](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html) method.

Request Logger used in this test has the following [options](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/constructor.html) enabled:

|Option|Effect|
|-|-|
|`logResponseHeaders`| logs the response header|
|`logResponseBody`| logs the response body|
|`stringifyResponseBody`| converts the response body to a string|

The filename is read from the `content-disposition` response header and is logged to the console. The file contents constitute the response body and are logged to the console.
