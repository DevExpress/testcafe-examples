# Type Checks for Test Metadata

You can restrict the range of acceptable values or value types for your test metadata. This approach simplifies test maintainance and development.

1. The `custom-typing.ts` file defines the `MetaOptions` data type.

    ```ts
    type MetaOptions = {
        device: 'mobile' | 'desktop' | 'tablet';
        skip: boolean;
    };
    ```

2. The `TestFn` interface modifies the `test.meta` TestCafe method. The method now expects arguments of the `MetaOptions` data type.

    ```ts
    declare module 'testcafe' {
        global {
            interface TestFn {
                meta(options: MetaOptions): this; // restricted to MetaOptions
                meta<T>(options: T): this; // generic fallback
            }
        }
    }
    ```

3. To apply these rules, import the `./custom-typing` file into `index.ts`.

    ```ts
    import './custom-typing';
    ```

When TestCafe compiles the `index.ts` test, it checks `t.meta` options against the list of known keys and values.

The compilation fails if your test metadata includes an unknown key or an unacceptable value:

```plaintext
Argument of type '{ device: "desktop"; skip: false; priority: any; }' is not assignable to parameter of type'MetaOptions'.
```

```plaintext
Type '"cloud"' is not assignable to type '"mobile" | "desktop" | "tablet"'.
```
