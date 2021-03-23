# Mock Date

**Test Code**: [index.js](index.js)

[Mockdate](https://www.npmjs.com/package/mockdate) is an npm module that allows you to mock the current date. 
**Note**: This example uses `mockdate@^2.0.5` because `mockdate@3.x.x` does not work in the browser. Read the full explanation in [this thread](https://github.com/DevExpress/testcafe-examples/issues/49#issuecomment-786572703).

Use the `clientScripts` function to inject the `mockdate` module and add the code that uses this module to set the browser date.

The client code returns the date and the test code verifies that the date is equal to the date in the `clientScript` function.
