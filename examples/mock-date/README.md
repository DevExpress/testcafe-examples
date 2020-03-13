# How To Mock Date

**Test Code**: [index.js](index.js)

[`mockdate`](https://www.npmjs.com/package/mockdate) is an npm module that allows you to substitute the current date.

Use the `clientScripts` function to inject the `mockdate` module and add the code that uses this module to set the browser date value with `MockDate.set`, passing a string with the date as its argument.

The client code returns the date and the test code verifies that the date is equal to the date in the `clientScript` function.
