# Use XPath Selectors

**Test Code**: [index.js](index.js)

This example shows how to use XPath selectors in TestCafe tests.

The `xpath-selector.js` file exports a [TestCafe selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) that takes an XPath string as a parameter. This selector uses a function executed on the client to search for elements that match an XPath expression.

`index.js` imports this custom selector from `xpath-selector.js` and uses it to identify page elements with XPath strings.