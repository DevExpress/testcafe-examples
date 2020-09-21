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

* [Find Element By Trimmed Text](examples/find-element-by-trimmed-text)
* [Use XPath Selectors](examples/use-xpath-selectors)
* [Access Element Properties](examples/element-properties)
* [Iterate Over Table Rows](examples/iterate-over-table-rows)
* [Test \<select\> Elements](examples/test-select-elements)
* [Page Reload](examples/page-manipulation)
* [Extract Code to Helpers](examples/extract-code-to-helpers)
* [Create Data-Driven Tests](examples/create-data-driven-tests)
* [Use Page Model](examples/use-page-model)
* [Inject Custom Client Scripts](examples/client-scripts)
* [Import Third-Party Modules](examples/import-third-party-modules)
* [Mock Date](examples/mock-date)
* [Mock Geolocation API](examples/mock-geolocation-api)
* [Wait Until an Element Property Has a Specific Value](examples/wait-for-element-property-value)
* [Wait For File Download](examples/wait-for-file-download)
* [Access Element Properties](examples/element-properties)

Below are the examples that run in Chrome or Firefox only or require additional launch arguments. You should launch these examples separately.

* [Mock Camera/Microphone Access](detached-examples/mock-camera-microphone-access)
<!--  -->
