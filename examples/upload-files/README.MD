# Select Files To Upload

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

This example shows how to populate a `type="file"` input with files.

The tested page includes an `<input>` and a `<button>`. The input accepts multiple files. When the `<button>` is clicked files are fetched to the server as a 'POST' request.

Before the test a requestLogger instance is configured and attached to the fixture with the `fixture.requestHooks` Method.

During the test files are selected with `t.setFilesToUpload`. When a `<button>` is clicked, a fetch request occurs to the server. If one or more files were sent, the server responds with `200 OK`. If no files were sent, the server responds with `204 No Content`. TestCafe then evaluates he response status code with `t.expect.eql`.

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
