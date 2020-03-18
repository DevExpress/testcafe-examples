# Find Element By Trimmed Text

**Test Code**: [index.js](index.js)

This example shows how to find the element on the page by trimmed text.

`findElementByTrimmedText` is a TestCafe Selector that takes two arguments: `baseCSSSelector` and `text`. This selector runs a function on the client-side. The function locates the element on the page by a CSS selector, trims the inner text of the element, and returns the element if the `text` parameter matches the trimmed text.

The test checks if the element with the specified text exists on the page.
