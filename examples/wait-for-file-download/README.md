# Wait For File Download

**Test Code**: [test.js](test.js)

This example shows how to specify that a test should to wait for the file to download.

Before the test begins, it obtains the `downloadedFilePath`. If the file already exists on the path, the test removes the file to save the download without warnings or errors.

In the example, the test runs on Google Chrome browser. The asynchronous `waitForDownload` function runs a `for` loop which checks if the file exists on the specified download path. It runs the body of the loop several times, with a timeout between tries, until the file is downloaded. If the function does not locate the file after the tries, it returns `false`.
