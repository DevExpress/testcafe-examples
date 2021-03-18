# Mock Date

**Test Code**: [index.js](index.js)

[`mockdate`](https://www.npmjs.com/package/mockdate) is an npm module that allows you to substitute the current date. Note: you must use `mockdate@^2.0.5` as `mockdate@3.0.3` does not work in the browser https://github.com/DevExpress/testcafe-examples/issues/49

Use the `clientScripts` function to inject the `mockdate` module and add the code that uses this module to set the browser date.

The client code returns the date and the test code verifies that the date is equal to the date in the `clientScript` function.
