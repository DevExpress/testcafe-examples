# Iterate Over Table Rows

**Test Code**: [index.js](index.js)

This example shows how to iterate over table rows. 

The [example page](index.html) provides a table, which we iterate over. First off, we need to select the table and then get the total number of rows in it:

`const dataRowCount = await dataRows.count;`

When you have `dataRowCount` available, you can proceed to iterate over the rows. In the suggested example, we do this in a `for` loop. 

In each row, we check the cell where the index is equal to 1 and expect it to contain the text `Smith`. If the following row is even, we expect it to have a checkbox in a checked state.
