# Inject Custom Client Scripts

These examples show how to inject custom scripts into tested webpages.

## Inject a Node.js module into a tested page

**Test Code**: [inject-a-nodejs-module.js](inject-a-nodejs-module.js)

TestCafe allows you to add third-party Node.js modules to the tested page's code during test execution.

This example shows how to inject the [lodash](https://github.com/lodash/lodash) module into the tested page and use the [defaults](https://lodash.com/docs/4.17.15#defaults) method in client-side code.

The [fixture.clientScripts](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#inject-scripts-into-tested-pages) method is used to inject the module into all pages visited during the fixture execution. The `module` option passed to `fixture.clientScripts` specifies the module name. TestCafe searches for the module's entry point with Node.js mechanisms and injects its content.

Then, the [t.eval](https://devexpress.github.io/testcafe/documentation/test-api/obtaining-data-from-the-client/#one-time-client-code-execution) method runs client-side code that uses the [defaults](https://lodash.com/docs/4.17.15#defaults) method from `lodash`. The result is checked in test code with the [ok](https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#ok) assertion.

> Browsers can execute the `lodash` module because it implements the [UMD](https://github.com/umdjs/umd) API. You can use TestCafe to inject any UMD-compatible module into the tested pages.
