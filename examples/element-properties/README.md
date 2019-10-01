# Access Element Properties

These examples show how to access DOM element's properties and verify them with assertions.

## Check element's markup

**Test Code**: [check-element-markup.js](check-element-markup.js)

This example shows how to verify the [Element.outerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML) property.

The [selector.addCustomDOMProperties](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/extending-selectors.html#custom-properties) method is used to add the `outerHTML` property to the `label[for]` element selector. Then, this property value is verified with an assertion.
