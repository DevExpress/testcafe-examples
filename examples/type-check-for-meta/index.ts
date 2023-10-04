import { Selector } from 'testcafe';
import './custom-typing-generic'
import './custom-typing'

fixture `Fixture with meta device: mobile and skip: true`
    .meta({ device: 'mobile', skip: true })
    .page `https://devexpress.github.io/testcafe/example`;

test
    .meta({ device: 'mobile', skip: false })
    ('test with meta device: mobile and skip: false', async t => {
    await t.wait(1000);
});

fixture `Fixture with meta device: desktop`
    .meta({ device: 'desktop' })
    .page `https://devexpress.github.io/testcafe/example`;

test
    .meta({ device: 'mobile', skip: false })
    ('test with meta device: mobile and skip: false', async t => {
    await t.wait(1000);
});

test
    .meta<MetaOptions>({ device: 'desktop', skip: false })
    ('test with meta device: desktop and skip: false', async t => {
        await t.wait(1000);
    });

test
    .meta<MetaOptions>({ device: 'tablet', skip: false })
    ('test with meta device: tablet and skip: false', async t => {
    await t.wait(1000);
});