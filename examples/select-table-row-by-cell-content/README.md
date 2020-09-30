# Select a Table Row by Cell Content

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

This example shows how to select a table row based on the cell content.

The tested page includes a table with `Id`, `First name` and `Last name` columns and three rows of data. A click on a row highlights it.

The test identifies the target row by the value of its `Id` column. Then it uses the `t.eql` method to verify cell values in this row and the `t.ok` method to check that it is highlighted.

## TestCafe API in This Example

1. Test Structure:
    * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
    * [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
2. Element Identification and Actions:
    * [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
    * [t.click](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/click.html) Method
    * [Selector.withExactText](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/withexacttext.html) Method
    * [Selector.parent](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/parent.html) Method
    * [Selector.child](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/child.html) Method
    * [Selector.nth](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/nth.html) Method
    * [DOM Node State Object](https://devexpress.github.io/testcafe/documentation/reference/test-api/domnodestate.html): `hasClass` Method
3. Assertion and Evaluation:
    * [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
