# Wait For File Download

**Test Code**: [test.js](test.js)

This example shows how to specify that a test should to wait for the file to download.

Before the test begins, it obtains the `downloadedFilePath`. If the file already exists, the test removes the file and saves the downloaded file without warnings or errors.

In the example, the test runs on Google Chrome browser. The asynchronous `waitForDownload` function runs a `for` loop which checks if the file exists in the specified download path. The body of the loop is run several times with a timeout between attempts until the file is downloaded. If the function cannot locate the file, it returns `false`.
