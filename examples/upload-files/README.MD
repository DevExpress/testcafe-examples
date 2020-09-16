# Select Files To Upload

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

TestCafe cannot test native browser dialogs, including those during file selection. For this reason, TestCafe utilizes another approach to file selection. This example shows how to select files to populate a `type="file"` input.

The sample page includes a `<form>` that contains:

* `<input>` element that holds the selected files
* the `submit` button that sends the files to the server.

During the test the `t.setFilesToUpload` method selects the files to send through the `<input>`. A `submit` button click sends the files. The server responds with a list of uploaded files, which is evaluated with the `t.expect.eql` Method.

## TestCafe Functions and Methods Used in This Example

1. Test Structure:
   - [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
2. Element Identification and Actions:
   - [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
   - [t.click](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/click.html) Method
   - [t.setFilesToUpload](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/setfilestoupload.html) Method
3. Assertion and Evaluation:
   - [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
