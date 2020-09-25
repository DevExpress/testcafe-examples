# Submit a Form

**Test Code**: [submit-a-form.js](submit-a-form.js)

This example shows how to submit a form with DOM API. To run code in the browser, the test uses a [client function](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/obtain-client-side-info.html). The test runs against the [TestCafe example page](https://devexpress.github.io/testcafe/example).

During the test, the [t.typeText](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/typetext.html) action types the developer name into the corresponding field. Then, the test calls the `submitForm` client function that submits the form with [HTMLFormElement.requestSubmit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/requestSubmit). Finally, the [t.expect.contains](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/contains.html) assertion verifies that the `Thank you` page opens and displays the entered developer name.

## TestCafe API in This Example

* Test Structure:
  * [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
  * [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
* Element Identification and Actions:
  * [t.typeText](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/typetext.html) Method
* Assertion and Evaluation:
  * [t.expect.contains](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/contains.html) Method
* Custom Scripts:
  * [ClientFunction](https://devexpress.github.io/testcafe/documentation/reference/test-api/clientfunction/) Object