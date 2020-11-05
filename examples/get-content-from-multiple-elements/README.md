# Get Content From Multiple Elements

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

This example shows how to extract text content from every item in an unordered list (`<ul>`) and compare it with the expected content.

The tested page includes a `<ul>` with three `<li>` elements.

During the test the `getTextFromElements` function takes a TestCafe Selector as an argument and returns an array of strings: the `textContent` of each element that matches the `selector`. The test checks if the resulting list matches an expected one with the `t.expect.eql` method.

## TestCafe API Used in This Example

* Test Structure:
  * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
* Element Identification and Actions:
  * [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
  * [Selector.find](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/find.html) Method.
  * [Selector.nth](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/nth.html) Method.
* Assertion and Evaluation:
  * [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
