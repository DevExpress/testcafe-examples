# Extract Reused Code to Helper Functions

**Test Code**: [index.js](index.js)

This example shows how to extract test code to chained class methods defined in a separate class.

The `index.js` test file imports a helper class from `helper.js`. These helper methods execute test actions like [t.click](https://devexpress.github.io/testcafe/documentation/test-api/actions/click.html) or [t.typeText](https://devexpress.github.io/testcafe/documentation/test-api/actions/type-text.html). The helper methods calls can be chained like it can be done with test controller's methods.

Note that the [test controller instance](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#test-controller) is imported from the `testcafe` module. You don't need to pass `t` to helper functions because TestCafe can resolve the current test context and provide the correct test controller instance.