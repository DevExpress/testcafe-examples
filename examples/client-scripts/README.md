# Inject Custom Client Scripts

These examples show how to inject custom scripts into tested webpages.

## Inject a Node.js module into a tested page

**Test Code**: [inject-a-nodejs-module.js](inject-a-nodejs-module.js)

This example uses the [fixture.clientScripts](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#inject-scripts-into-tested-pages) method to inject a script into all pages visited during the fixture execution.

The `module` option passed to `fixture.clientScripts` specifies the name of the Node.js module that should be injected. TestCafe searches for the module's entry point with Node.js mechanisms and injects its content into the page.
