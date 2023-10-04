
declare module 'testcafe' {
    global {
        interface TestFn {
        meta<T>(options: T): this;
        }
    }
}