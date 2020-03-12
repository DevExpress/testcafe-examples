# Iterate Over Table Rows

**Test Code**: [index.js](index.js)

This example shows how to iterate over table rows.

The [example page](index.html) contains a table over which the test code iterates. Select the table and get the total number of rows in it:

```js
const table        = Selector('table');
const dataRows     = table.find('tbody > tr');
const dataRowCount = await dataRows.count;
```

When `dataRowCount` is available, the test can iterate over the rows. In the example, the iteration is done in a `for` loop.

In each row, the test checks the cell where the index is equal to one and whether it contains the text `Smith`. If the following row is even, the test checks if this row has a checkbox in a checked state.
