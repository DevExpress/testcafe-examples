# Mock Geolocation API

**Test Code**: [index.js](index.js)

This example shows how to mock geolocation API in test code.

The tested page displays the **Check geolocation** button. When a user clicks this button, the page displays the current location obtained with the [getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) method (see the script in `index.html`).

Mock code for `getCurrentPosition` is assigned to the `mockGeolocationScript` variable in `index.js` as a string. This script returns the `(30, -105)` coordinates and the current timestamp. Then, `mockGeolocationScript` is injected into the tested page with the [fixture.clientScripts](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#inject-scripts-into-tested-pages) method.

When you run the test, `getCurrentPosition` gets mocked during page load (the injected script is added to `<head>`) and the **Check geolocation** button prints *Latitude: 30* and *Longitude: -105*.