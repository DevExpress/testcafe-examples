# Extract Reused Code to Helper Functions

**Test Code**: [index.js](index.js)

This example demonstrates how to chain helper methods defined in a separate file.

The `index.js` test file imports a Helper class from `helper.js`. The helper contains customized test actions ([t.click](https://testcafe.io/documentation/402710/reference/test-api/testcontroller/click?search#header) and [t.typeText](https://testcafe.io/documentation/402674/reference/test-api/testcontroller/typetext?search#header)), as well as additional methods that facilitate method chaining.

Note that we import the [test controller](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#test-controller) object into the helper file. That way, helper functions connect to the correct test controller instance without additional invocations of the `t` object.