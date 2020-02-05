# Create Data-Driven Tests

**Test Code**: [index.js](index.js)

This example shows how to create a test that performs parameterized actions and run this test against two data objects.

The [test](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#tests) function is wrapped in a `foreach` cycle that iterates through a data set. Data objects are imported from the `data.json` file. Test code uses data object's fields as input and expected values.