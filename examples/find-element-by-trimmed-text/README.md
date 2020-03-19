# Find Element By Trimmed Text

**Test Code**: [index.js](index.js)

This example shows how to find an element on a page by trimmed text.

`findElementByTrimmedText` is a TestCafe Selector that takes two arguments: `baseCSSSelector` and `text`. This selector runs a function on the client-side. The function locates the element on a page by CSS selector, trims the inner text of that element, and returns the element if the `text` parameter matches the trimmed text.

The test checks if an element with the specified text exists on the page.
