# Access Element Properties

These examples show how to access DOM element's properties and verify them with assertions.

## Check element's markup

**Test Code**: [check-element-markup.js](check-element-markup.js)

TestCafe selectors expose [API](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/dom-node-state.html) that allows you to access common DOM element properties. To obtain any other property value in test code, you will need to add a custom property to the selector.

This example shows how to access and verify the [Element.outerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML) property value that contains HTML markup for the element and its descendants.

In test code, the [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/creating-selectors.html) function creates a regular selector for the `label[for]` element. The [selector.addCustomDOMProperties](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/extending-selectors.html#custom-properties) method then adds the `outerHTML` property to this selector. The markup obtained from this property is verified with the [eql](https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#deep-equal) assertion.
