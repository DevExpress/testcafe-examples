# Check the Name and the Contents of a Downloaded File

**Test Code**: [index.js](index.js)

This example shows how to check the name and the content of a file downloaded during a test.

During the test, a link click starts a file download. To verify download success and obtain the name and the content of the file, a [RequestLogger](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/) is attached to the test with the [t.requestHooks](https://devexpress.github.io/testcafe/documentation/reference/test-api/test/requesthooks.html) method.

The [RequestLogger.contains](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/contains.html) method in combination with the [t.expect.ok](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html) verify the downloaded file information.

The Request Logger is set up to log all successful `GET` requests to a particular url. The responses are then filtered to only contain a `.txt` file with specified contents.

The Request Logger has the following [options](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestlogger/constructor.html) enabled:

|Option|Effect|
|-|-|
|`logResponseHeaders`| logs the response header|
|`logResponseBody`| logs the response body|
|`stringifyResponseBody`| converts the response body to a string|

The file name is read from the `content-disposition` response header. The file contents constitute the response body.
