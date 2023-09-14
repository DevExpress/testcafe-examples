import {Selector} from "testcafe"

fixture
    .meta({
        device: 'mobile',
        skip: true
    })
    `Fixture with meta device: mobile and skip: true`
    .page('https://devexpress.github.io/testcafe/example');


test
    .meta({
        device: 'mobile',
        skip: false,
    })
    ('test with meta device: mobile', async t => {

    await t.wait(1000);
});


fixture
    .meta({
        device: 'desktop',
    })
    `Fixture with meta device: desktop`
    .page('https://devexpress.github.io/testcafe/example');


test
    .meta({
        device: 'mobile',
        skip: false,
    })
    ('test with meta device: mobile and skip: false', async t => {

    await t.wait(1000);
});

test
    .meta({
        device: 'desktop',
        skip: false,
    })
    ('test with meta  device: desktop and skip: false', async t => {

    await t.wait(1000);
});

test
    .meta({
        device: 'tablet',
        skip: false,
    })
    ('test with meta  device: tablet and skip: false', async t => {

    await t.wait(1000);
});