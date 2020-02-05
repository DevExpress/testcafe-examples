# Extract Reused Code to Helper Functions

**Test Code**: [index.js](index.js)

This example shows how to extract test code to functions defined in a separate module.

The `index.js` test file imports three methods from `helper.js`: `enterName`, `typeComment` and `submitForm`. These helper functions execute test actions like [t.click](https://devexpress.github.io/testcafe/documentation/test-api/actions/click.html) or [t.typeText](https://devexpress.github.io/testcafe/documentation/test-api/actions/type-text.html).

Note that the [test controller instance](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#test-controller) is imported from the `testcafe` module. You don't need to pass `t` to helper functions because TestCafe can resolve the current test context and provide the correct test controller instance.