# Check the Name of a Downloaded File

**Test Code**: [index.js](index.js)

This example shows how obtain the name of a file downloaded during a test.

During the test, a link click starts a file download. The file has a dynamically generated name. To verify download success and obtain the file name, a [RequestLogger](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/) is attached to the test with the [t.requestHooks](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/requesthooks.html) method.

To verify download success, a status code of the response is checked with the [t.expect.ok](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html) method.

Request Logger has the `logResponseHeaders` [option](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/constructor.html) enabled in order to read filename from the response header. The filename is read from the `content-disposition` response header and logged to the console.
