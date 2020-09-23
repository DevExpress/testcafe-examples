# Iterate Over a List of Elements

**Test Code**: [index.js](index.js)

**Tested Page**: [TestCafe Example](https://devexpress.github.io/testcafe/example/)

This example shows how to iterate over a list of elements and assert their values.

The tested page includes a list of `<input type="checkbox">` elements.

The expected values of the list items and their ids are declared as an array of objects and have the following structure:

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

The test clicks each of the list items to set the 'checked' state. After that, the test calculates the count of input elements with the `Selector.count` property and iterates through the list of these elements with a `for` loop. Inside the loop, the input's text is compared to the expected value with the `t.expect.eql` method.

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
