# Use Page Model

**Test Code**: [index.js](index.js)

This examples shows how to abstract out element selectors and common operations with these elements into a [page model](https://devexpress.github.io/testcafe/documentation/recipes/extract-reusable-test-code/use-page-model.html).

The `page-model.js` file defines the `Page` class. Its properties (`nameInput`, `submitButton`, etc.) expose page element selectors. The `submitName` method types text into the **Developer name** field and clicks the **Submit** button. `page-model.js` exports an instance of the `Page` class.

The `index.js` test file imports the page model instance from `page-model.js`. Tests use page model properties to identify target elements for actions and assertions. For instance, the second test iterates through `page.featureList`, clicks each `label` element and verifies that it's checked.