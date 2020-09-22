# Iterate Over Elements of a List

**Test Code**: [index.js](index.js)

**Tested Page**: [TestCafe Example](https://devexpress.github.io/testcafe/example/)

This example shows how to iterate over elements of a list and assert their values.

The tested page includes a list of elements, each with an `<input type="checkbox"`> element and some text.

The expected values of the list items are declared as an array of objects and have the following structure:

```js
[
    {
        id: 'id-of-the-first-checkbox',
        text: 'Text of the first item'
    },
    {
        ...
    }
]
```

A `for ... of` loop iterates over the list and clicks each checkbox with the `t.click` action. A `for` loop then asserts the text of each item with the `t.expect.eql` method. The number of iterations is set to the amount of list items with the `Selector.count` property.

## TestCafe Functions and Methods Used in This Example

1. Test Structure:
    - [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
    - [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
2. Element Identification and Actions:
    - [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
    - [Selector.withExactText](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/withexacttext.html) Method
    - [Selector.parent](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/parent.html) Method
    - [Selector.child](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/child.html) Method
    - [Selector.nth](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/nth.html) Method
3. Assertion and Evaluation:
    - [Selector.count](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/count.html) Property
    - [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
