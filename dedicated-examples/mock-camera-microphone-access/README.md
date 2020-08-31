# Mock Camera/Microphone Access

This example runs in **Chrome** and shows how to use mock data for the microphone and camera.

**Test Code**: [mock-camera-microphone-access.js](mock-camera-microphone-access.js)

The test page requests permission to record audio and video. The resulting streams are directed to the corresponding `<audio>` and `<video>` elements on the page. When the `<button>` element registers a click, a snapshot of the video stream is drawn on the `<img>` element (if a video stream is present).

The first test function uses the [Selector.addCustomDOMProperties](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/addcustomdomproperties.html) method to read the `<img>`'s `.src` property and check whether it contains an image.

The second test function uses the [Selector.addCustomDOMProperties](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/addcustomdomproperties.html) method to read the `<audio>`'s `.srcObject` property. If an audio stream is present, it returns `true`. The [t.expect.ok](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html) method checks this value.

`getUserMedia` allows access to the Media Stream API. When `getUserMedia` is called, it prompts the user for permission. Use the `--use-fake-ui-for-media-stream` Chrome flag to grant permission without user input.

If your environment does not have audio/video recording hardware, use `--use-fake-device-for-media-stream` to feed a test pattern to the API.

Chrome doesn't allow Media Stream API calls from insecure origins. To use a secure origin, do either of the following:

* Run TestCafe locally with a [--hostname](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#hostname) CLI parameter:

```sh
testcafe --hostname localhost "chrome --use-fake-ui-for-media-stream --use-fake-device-for-media-stream" index.js
```

* [Generate a self-signed certificate](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/test-https-features-and-http2-websites.html#use-a-self-signed-certificate) and enable HTTPS with the [--ssl](https://devexpress.github.io/testcafe/documentation/reference/command-line-interface.html#--ssl-options) CLI parameter. Use the `--ignore-certificate-errors` Chrome flag to ignore certificate warnings.

```sh
testcafe --ssl pfx=/path/to/cert.pfx "chrome --ignore-certificate-errors --use-fake-ui-for-media-stream --use-fake-device-for-media-stream" index.js
```
