# Pass Arguments to Client Functions

**Test Code**: [call-client-functions-with-arguments.js](call-client-functions-with-arguments.js)

TestCafe allows you to execute code in the browser with [client functions](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/obtain-client-side-info.html). Client functions are defined in test code but their body contains code they send to the browser and execute it there.

This example shows how to pass arguments to client functions.

The test runs against a YouTube page. During the test, the video is paused, seeked to a new time, and resumed. To control playback, the following client functions are created:

* `pause()` – calls [HTMLMediaElement.pause](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause) to pause the video;
* `setTime(time)` – receives a `time` argument and assignes this value to [HTMLMediaElement.currentTime](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime) to seek the video to a new time;
* `getTime()` – returns the current timestamp obtained from [HTMLMediaElement.currentTime](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime);
* `play()` – calls [HTMLMediaElement.play](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play) to resume the video.

First, the test pauses the video, seeks it to the `60`th second, and prints the current time in the console. Then it resumes playback, plays for `10` more seconds, and prints the time again.

## TestCafe API Used

* Browser Code
  * [ClientFunction](https://devexpress.github.io/testcafe/documentation/reference/test-api/clientfunction/constructor.html) Constructor
* Test Structure
  * [Fixture.meta](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/meta.html) Method
  * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
* Actions
  * [t.wait](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/wait.html) Method
