# Scroll Elements Into View

**Test Code**: [index.js](index.js)  

> UPDATE: TestCafe v1.14 includes dedicated scroll actions. You do not need to interact with off-screen elements or execute client-side code to scroll the webpage. Read the documentation for details:
>
> * [t.scroll](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/scroll.html)
> * [t.scrollBy](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/scrollby.html)
> * [t.scrollIntoView](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/scrollintoview.html)

TestCafe [actions](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/interact-with-the-page.html) have a built-in scrolling mechanism. In rare cases, you may need to scroll the page manually. This example demonstrates two common ways to do this: a `hover` action and a [ClientFunction](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/obtain-client-side-info.html)

The test page has two buttons. They are located at 2000 px and 4000 px along the X-axis (outside of the viewport), respectively.

The `index.js` file includes 2 tests.

The first test scrolls the page with a [hover action](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/hover.html).

The second test introduces two custom Client Functions that scroll the page:

1. The `scrollToElement(selector, offsetX, offsetY)` function scrolls the element into the viewport.

    | Parameter  | Description |
    |------------|-------------|
    | `selector` | a selector that identifies the page element |
    | `offsetX`  | the offset on the X-axis in px |
    | `offsetY`  | the offset on the Y-axis in px |

2. The `scrollBy(x, y)` function scrolls the page by the given number of pixels.

    | Parameter  | Description |
    |------------|-------------|
    | `x` | the number of pixels by which the page is scrolled horizontally|
    | `y`  | the number of pixels by which the page is scrolled vertically|
