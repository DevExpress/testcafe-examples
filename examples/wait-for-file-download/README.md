# Wait For File Download

**Test Code**: [test.js](test.js)

This example shows how to set a test to wait for the file download.

Before the test begins, we need to obtain the `downloadedFilePath`. If the file already exists on the path, we remove the existing one to make way for the download.

In the provided example, we suggest running the test using Chrome to simplify the process of locating the downloaded file. If the browser is Chrome, we initiate the asynchronous `waitForDownload` function.

`waitForDownload` runs a `for` loop which checks if the file exists on the specified download path. It runs the body of the loop 11 times, with a 500-millisecond timeout between tries, untill the file is downloaded. If the function does not locate the file after the tries, it returns `false`.
