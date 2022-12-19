# TestCafe Examples

This repository contains sample test files that help you learn how to use TestCafe.

Here you will find examples that demonstrate the basic usage, advanced features, edge cases, as well as tips and tricks.

## Installation

1. Clone this repository:

    ```sh
    git clone https://github.com/DevExpress/testcafe-examples.git
    ```

2. Go to the project's root directory:

    ```sh
    cd testcafe-examples
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

Use the `npm test` script to run all tests in Chrome and Firefox.

```sh
npm test
```

You can use TestCafe [CLI options](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html) to specify different [target browsers](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#browser-list) or run tests from a specific [directory](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#file-pathglob-pattern).

To run tests in Chrome only, execute the following command:

```sh
npx testcafe chrome examples
```

The following command runs the examples from the `client-scripts` directory:

```sh
npx testcafe chrome examples/client-scripts
```

See [Command Line Interface](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html) for more information.

## Examples in This Repository

> We are in the process of adding more examples to this repository.

The repository includes the following examples:

* [Access Element Properties](examples/element-properties)
* [Chain Helper Methods](examples/chain-helper-methods)
* [Change Element's Style](examples/change-element-style)
* [Check If an Image Has Loaded](examples/check-if-image-loaded)
* [Check the Downloaded File Name and Content](examples/check-downloaded-file-name-and-content)
* [Check Whether Web Page Is Opened With TestCafe](examples/check-if-opened-with-testcafe)
* [Create Data-Driven Tests](examples/create-data-driven-tests)
* [Extract Reused Code to Helper Functions](examples/extract-code-to-helpers)
* [Find Element By Trimmed Text](examples/find-element-by-trimmed-text)
* [Import Third-Party Modules](examples/import-third-party-modules)
* [Inject Custom Client Scripts](examples/client-scripts)
* [Iterate Over a List of Elements](examples/iterate-over-list-elements)
* [Iterate Over Table Rows](examples/iterate-over-table-rows)
* [Mock Date](examples/mock-date)
* [Mock Geolocation API](examples/mock-geolocation-api)
* [Page Manipulation](examples/page-manipulation)
* [Pass Parameters to Tests](examples/pass-parameters-to-tests)
* [Scroll Elements Into View](examples/scroll)
* [Select a Table Row by Cell Content](examples/select-table-row-by-cell-content)
* [Select Files To Upload](examples/upload-files)
* [Set a Custom Referrer](examples/set-a-custom-referrer)
* [Simulate the Web Page Losing Focus](examples/blur-window)
* [Submit a Form](examples/submit-a-form)
* [Test \<select\> Elements](examples/test-select-elements)
* [Use Page Model](examples/use-page-model)
* [Use XPath Selectors](examples/use-xpath-selectors)
* [Wait Until an Element Property Has a Specific Value](examples/wait-for-element-property-value)
* [Wait For File Download](examples/wait-for-file-download)

Below are the examples that run in Chrome or Firefox only or require additional launch arguments. You should launch these examples separately.

* [Extended Client-Side Error Tracking](detached-examples/extended-error-tracking)
* [Mock Camera/Microphone Access](detached-examples/mock-camera-microphone-access)
* [Multi-User Tests](detached-examples/multiuser-scenario)
* [Kerberos authenticate](detached-examples/kerberos-auth)

