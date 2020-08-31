import { ClientFunction } from 'testcafe';

const waitForIframeLoad = ClientFunction((iframeSelector) => new Promise((resolve, reject) => {
    var i = 0;
    var intervalId = null;

    intervalId = window.setInterval(() => {
        var iframeElement = document.querySelector(iframeSelector);
        if (iframeElement
            && iframeElement.contentWindow
            && iframeElement.contentWindow.location.href !== 'about:blank'
            && iframeElement.contentDocument) {
            window.clearInterval(intervalId);
            resolve(i);
        }
        if (i > 60) {
            window.clearInterval(intervalId);
            reject(new Error('Iframe content loading timeout'))
        }
        i++;
    }, 1000);
}));

fixture `Wait for an iframe to load`
    .page `https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/jQuery/Light/`;

test('Wait for an iframe to load', async t => {
        const iframeSelector = '#demoFrame';
    
        await waitForIframeLoad(iframeSelector);
    
        await t.switchToIframe(iframeSelector);
})
