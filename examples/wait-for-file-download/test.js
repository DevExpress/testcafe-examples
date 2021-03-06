import { t } from 'testcafe';

import fs from 'fs';
import { join as joinPath } from 'path';
import os from 'os';

async function waitForFileDownload (path) {
    for (let i = 0; i < 10; i++) {
        if (fs.existsSync(path))
            return true;

        await t.wait(500);
    }

    return fs.existsSync(path);
}

function getFileDownloadPath () {
    return joinPath(os.homedir(), 'Downloads', 'text-file.txt');
}

let downloadedFilePath = null;

fixture `Wait for file download`
    .page('./index.html');

test
    .before(async () => {
        downloadedFilePath = getFileDownloadPath();

        if (fs.existsSync(downloadedFilePath))
            fs.unlinkSync(downloadedFilePath);
    })('File Download', async () => {
        // Run this test only with the Google Chrome browser to simplify the searching of the downloaded file.
        if (t.browser.name !== 'Chrome')
            return;

        await t.click('a');

        await waitForFileDownload(downloadedFilePath);
    });
