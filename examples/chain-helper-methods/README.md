# Extract Reused Code to Helper Functions

**Test Code**: [index.js](index.js)

This example shows how to extract test code to chained class methods defined in a separate class.

The `index.js` test file imports a helper class from `helper.js`. These helper methods execute test actions like [t.click](https://devexpress.github.io/testcafe/documentation/test-api/actions/click.html) or [t.typeText](https://devexpress.github.io/testcafe/documentation/test-api/actions/type-text.html). The helper methods calls can be chained like it can be done with test controller's methods.

Note that we import the [test controller](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#test-controller) object into the helper file. That way, helper functions connect to the correct test controller instance without additional invocations of the `t` object.