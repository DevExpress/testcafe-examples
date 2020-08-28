# Mock Camera/Microphone Access

This example shows how to mock data for microphone and camera. This example runs in **Chrome**.

**Test Code**: [mock-camera-microphone-access.js](mock-camera-microphone-access.js)

The test page requests a permission to record audio and video. Resulting streams are directed to corresponding `<audio>` and `<video>` elements on the page. When the `<button>` element registers a click, a snapshot of the video stream draws on the `<img>` element if video stream is present.

The first test function uses [Selector.addCustomDOMProperties](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/addcustomdomproperties.html) method to read `<img>`'s `.src` property and check whether it holds an image.

The second test function uses [Selector.addCustomDOMProperties](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/addcustomdomproperties.html) method to read `<audio>`'s `.srcObject` property. If audio stream is present, it returns `true`. This value is tested with [t.expect.ok](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html) method.

`getUserMedia` allows access to the Media Stream API. When called, it spawns a dialog window. Use `--use-fake-ui-for-media-stream` Chrome flag to grant the permission without user input.

If your environment lacks audio/video recording hardware, use `--use-fake-device-for-media-stream` to feed a test pattern to the API.

Chrome doesn't allow Media Stream API calls from insecure origins. To get round this, do either of the following:

* Run TestCafe locally with a [--hostname](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#hostname) CLI parameter:

```sh
testcafe --hostname localhost "chrome --use-fake-ui-for-media-stream --use-fake-device-for-media-stream" index.js
```

* [Generate a self-signed certificate](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/test-https-features-and-http2-websites.html#use-a-self-signed-certificate) and enable HTTPS with [--ssl](https://devexpress.github.io/testcafe/documentation/reference/command-line-interface.html#--ssl-options) CLI parameter. Use the `--ignore-certificate-errors` Chrome flag to ignore certificate warnings.

```sh
testcafe --ssl pfx=/path/to/cert.pfx "chrome --ignore-certificate-errors --use-fake-ui-for-media-stream --use-fake-device-for-media-stream" index.js
```
