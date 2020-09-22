# Wait For File Download

**Test Code**: [test.js](test.js)

This example shows how to program a test to wait for a file to download.

Before the test begins, it obtains the `downloadedFilePath`. If the file already exists, the test rewrites it without warnings or errors.

This example runs in Google Chrome. The asynchronous `waitForDownload` function runs a `for` loop, which checks if the file exists in the specified download path. The body of the loop runs multiple times with a timeout between attempts until the download is completed. If the function cannot locate the file, it returns `false`.
