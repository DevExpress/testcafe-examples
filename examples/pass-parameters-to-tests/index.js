import JSONconfig from './config/config.json';
import JSconfig from './config/config';
import { ClientFunction } from 'testcafe';
import { pathToFileURL } from 'url';
import { resolve } from 'path';

const getDocumentUri = ClientFunction(() => document.documentURI);
const getFullFilePath = path => {
    const resolvedPath = resolve(__dirname, path);

    return pathToFileURL(resolvedPath).href;
};

fixture `Pass parameters to tests`

//set an environment variable
process.env.url = './src/env.html';

test('Navigate to URL from an environment variable', async t => {
    await t.expect(getDocumentUri()).eql(getFullFilePath(process.env.url));
})
.page(process.env.url);

test('Navigate to URL from .js configuration file', async t => {
    await t.expect(getDocumentUri()).eql(getFullFilePath(JSconfig.url));
})
.page(JSconfig.url);

test('Navigate to URL from JSON configuration file', async t => {
    await t.expect(getDocumentUri()).eql(getFullFilePath(JSONconfig.url));
})
.page(JSONconfig.url);
