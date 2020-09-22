# Select Table Row by Content

**Test Code**: [index.js](index.js)

**Tested Page**: [index.html](index.html)

This example shows how to select table rows based on the content of that row.

The tested page includes a table with `Id`, `First name` and `Last name` fields. The table has three rows of data.

A click on the row highlights it with a `background-color` CSS property.

During the test the expected row data is declared as a JavaScript object. The `t.eql` method compares the object values with actual values found in each of the table rows.

## TestCafe Functions and Methods Used in This Example

1. Test Structure:
    - [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
    - [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
2. Element Identification and Actions:
    - [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
    - [t.click](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/click.html) Method
    - [Selector.withExactText](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/withexacttext.html) Method
    - [Selector.parent](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/parent.html) Method
    - [Selector.child](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/child.html) Method
    - [Selector.nth](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/nth.html) Method
3. Assertion and Evaluation:
    - [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
