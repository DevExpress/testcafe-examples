# Check the Downloaded File Name and Content

**Test Code**: [index.js](index.js)

This example shows how to check the name and the content of a file downloaded during a test.

During the test, TestCafe clicks the link that triggers the file download. To confirm download completion and obtain the file name and content, a [RequestLogger](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/) is attached to the test with the [t.requestHooks](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/requesthooks.html) method.

The [RequestLogger.contains](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/contains.html) method, combined with the [t.expect.ok](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html), verifies the downloaded file name and content.

The Request Logger is set up to log all successful `GET` requests to a specific URL. The responses are then filtered to only contain a `.txt` file with the specified content.

The Request Logger has the following [options](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/constructor.html) enabled:

|Option|Effect|
|-|-|
|`logResponseHeaders`| logs the response header|
|`logResponseBody`| logs the response body|
|`stringifyResponseBody`| converts the response body to a string|

The file name is read from the `content-disposition` response header. The file contents constitute the response body.
