fixture `Wait for an iframe to load`
    .page `https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/jQuery/Light/`;

test('Wait for an iframe to load', async t => {
    const iframeSelector = Selector('#demoFrame', { timeout: 60000 });

    await t.switchToIframe(iframeSelector);
})
