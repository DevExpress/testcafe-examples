# Create and reuse random data

This example show how to randomize your tests initial state and reuse it in your test session.

## Using helpers in a [Page Model](https://devexpress.github.io/testcafe/documentation/recipes/extract-reusable-test-code/use-page-model.html)

**Test Code**: [fixture-1.js](fixture-1.js), [fixture-2.js](fixture-2.js), [page-model.js](page-model.js)

**Command:** `npx testcafe all examples/create-and-reuse-random-data`

TestCafe allows you to organize your initial state data in the [Page Model](https://devexpress.github.io/testcafe/documentation/recipes/extract-reusable-test-code/use-page-model.html). There are two helpers in this example:
1. `Page.getNewRandomUser()` returns a new user name string for each method call. In addition to the random part, the helper method contains the "_Browser_OS" postfix.
2. `Page.onceGeneratedUser` is a once generated user name string. You can reuse it in all browsers and fixtures in the current test session.

## Once generated user name example console output
```
>npx testcafe all examples/create-and-reuse-random-data
 Running tests in:
 - Firefox 72.0 / Windows 10
 - Chrome 79.0.3945.130 / Windows 10
 - Microsoft Edge 79.0.309.71 / Windows 10
 - Internet Explorer 11.0 / Windows 10
 - Chrome 82.0.4048.2 / Windows 10
 - Microsoft Edge 18.18362 / Windows 10

 Fixture 1
[Chrome 79.0.3945.130] page.onceGeneratedUser === onceGenerated_142
[Chrome 82.0.4048.2] page.onceGeneratedUser === onceGenerated_142
[Microsoft Edge 79.0.309.71] page.onceGeneratedUser === onceGenerated_142
 √ Type two different random user name
[Firefox 72.0] page.onceGeneratedUser === onceGenerated_142
[Microsoft Edge 18.18362] page.onceGeneratedUser === onceGenerated_142
[Internet Explorer 11.0] page.onceGeneratedUser === onceGenerated_142
 √ Reuse once generated random user name

 Fixture 2
[Firefox 72.0] page.onceGeneratedUser === onceGenerated_142
[Microsoft Edge 18.18362] page.onceGeneratedUser === onceGenerated_142
[Internet Explorer 11.0] page.onceGeneratedUser === onceGenerated_142
 √ Type two different random user name
[Chrome 82.0.4048.2] page.onceGeneratedUser === onceGenerated_142
[Chrome 79.0.3945.130] page.onceGeneratedUser === onceGenerated_142
[Microsoft Edge 79.0.309.71] page.onceGeneratedUser === onceGenerated_142
 √ Reuse once generated random user name


 4 passed (18s)

```
