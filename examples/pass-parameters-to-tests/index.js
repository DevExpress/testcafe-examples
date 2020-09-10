import JSONconfig from './config/config.json';
import JSconfig from './config/config';
import { ClientFunction } from 'testcafe';

const getDocumentUri = ClientFunction(() => document.documentURI);

fixture `Pass parameters to tests`

process.env.Url = './src/env.html';

test('Get URL from an environment variable', async t => {
    console.log(`Test page URL: ${process.env.Url}`);

    await t
        .expect(getDocumentUri()).match(/.*\/env.html/);
})
.page(process.env.Url);

test('Get URL from .js configuration file', async t => {
    console.log(`Test page URL: ${JSconfig.Url}`);

    await t
        .expect(getDocumentUri()).match(/.*\/js.html/);
})
.page(JSconfig.Url);

test('Get URL from JSON configuration file', async t => {
    console.log(`Test page URL: ${JSONconfig.Url}`);

    await t
        .expect(getDocumentUri()).match(/.*\/json.html/);
})
.page(JSONconfig.Url);