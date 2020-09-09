# Select Files To Upload

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

TestCafe cannot test native browser dialogs, including those during file selection. For this reason, TestCafe utilizes another approach to file selection. This example shows how to select files to populate a `type="file"` input.

The tested page includes an `<input>` and a `<button>`. The input accepts multiple files. A `<button>` click [fetches](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) the files to the server in a 'POST' request.

Before the test the `fixture.requestHooks` method attaches a `requestLogger` instance to the fixture. This logger records all 'POST' requests made to a server endpoint.

During the test the `t.setFilesToUpload` method selects the files to send through the `<input>`. A `<button>` click makes a fetch request to the server. If the server receives one or more files, it responds with `200 OK`, otherwise the response status code is `204 No Content`. TestCafe then evaluates the status code with `t.expect.eql`.

## TestCafe Functions and Methods Employed in This Example

1. Test Structure:
   - [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
2. Actions:
   - [t.click](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/click.html) Method
   - [t.setFilesToUpload](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/setfilestoupload.html) Method
3. Assertion and Evaluation:
   - [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
   - [t.expect.notEql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/noteql.html) Method
4. Request Handlers:
   - [Fixture.requestHooks](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/requesthooks.html) Method
