# Iterate Over Elements of a List

**Test Code**: [index.js](index.js)

**Tested Page**: [TestCafe Example](https://devexpress.github.io/testcafe/example/)

This example shows how to iterate over elements of a list and assert their values.

The tested page includes a list of elements, each with an `<input type="checkbox"`> element and some text.

During the test the expected values of the list items are declared as an array of objects with the following structure:

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
