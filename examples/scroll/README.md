# Scroll Elements Into View

**Test Code**: [index.js](index.js)  

This example shows how to use [ClientFunctions](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/obtain-client-side-info.html) and [actions](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/interact-with-the-page.html) to simulate page scroll in TestCafe tests.

The test page has 2 buttons. They are located 2000 px and 4000 px to the right respectively, both outside of viewport.

The `index.js` file includes 2 tests.

First test scrolls the page with a [hover action](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/hover.html).

Second test introduces 2 custom Client Functions that scroll the page:

1. The `scrollToElement(selector, offsetX, offsetY)` function scrolls the page such that the element is inside the viewport.

    | Parameter  | Description |
    |------------|-------------|
    | `selector` | a selector that identifies page element to scroll to |
    | `offsetX`  | offset on X-axis in px |
    | `offsetY`  | offset on Y-axis in px |

2. The `scrollBy(x, y)` function scrolls the page by a fixed amount.

    | Parameter  | Description |
    |------------|-------------|
    | `x` | the horizontal pixel value to scroll by |
    | `y`  | the vertical pixel value to scroll by |
