import { Selector } from 'testcafe';

const range = Selector("input[type='range']");

const errorHandler = () => {
    const errorOptions = [
        'ResizeObserver loop completed with undelivered notifications.',
        'ResizeObserver loop limit exceeded',
    ];

    window.addEventListener('error', e => {
        if (errorOptions.includes(e.message))
            e.stopImmediatePropagation();
    });
};

fixture("Ignore 'ResizeObserver' error")
    .page('./index.html')
    .clientScripts({ content: `(${errorHandler.toString()})()` });

test("Shouldn't occur error when ResizeObserver loop limit exceeded", async t => {
    await t.typeText(range, '100');
});
