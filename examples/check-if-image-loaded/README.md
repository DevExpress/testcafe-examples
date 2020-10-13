# Check If an Image Has Loaded Without Errors

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

This example shows how to check whether an image on the page has successfully loaded.

The tested page requests an image from the server. The server responds with the image in a 15 seconds timeout.

If the image loads without errors, the promise is resolved, otherwise it's rejected.

During the test the `t.expect.ok` method checks the promise's status.

## TestCafe API in This Example

* [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
* [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
* [t.expect.ok](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/ok.html) Method
* [ClientFunction](https://devexpress.github.io/testcafe/documentation/reference/test-api/clientfunction/) Object
