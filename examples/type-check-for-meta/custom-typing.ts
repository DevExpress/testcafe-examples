type MetaOptions = {
    device: 'mobile' | 'desktop' | 'tablet';
    skip: boolean;
};
  
declare module 'testcafe' {
    global {
        interface TestFn {
            meta(options: MetaOptions): this;
        }

        interface TestFn {
            meta<T>(options: T): this;
        }
    }
}
