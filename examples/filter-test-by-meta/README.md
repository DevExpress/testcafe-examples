# Filter Tests By Metadata

The `.testcaferc.js` file [filters tests by function](https://testcafe.io/documentation/402638/reference/configuration-file#filter-tests-by-function).

The `validateMeta` function checks fixture and test metadata against a list of key-value pairs (`excludeFixtureMeta`, `excludeTestMeta`). TestCafe skips fixtures and tests if their metadata matches at least one key-value pair from the corresponding list.