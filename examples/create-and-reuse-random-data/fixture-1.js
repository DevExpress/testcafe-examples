import page from './page-model';

fixture `Fixture 1`
    .page(page.startURL);

test('Type two different random user name', async t => {
    const newRandomUser1 = page.getNewRandomUser(t.browser);
    const newRandomUser2 = page.getNewRandomUser(t.browser);

    await page.submitUser(newRandomUser1);
    await t
        .expect(page.header.innerText).contains(newRandomUser1);

    await t.navigateTo(page.startURL);
    await page.submitUser(newRandomUser2);
    await t
        .expect(page.header.innerText).contains(newRandomUser2);
});

test('Reuse once generated random user name', async t => {
    // NOTE: in the case of the multiple browser session (for example, `npx testcafe all examples/create-and-reuse-random-data`)
    // we have the same "onceGeneratedUser" value for each one.
    console.log(`[${t.browser.name} ${t.browser.version}] page.onceGeneratedUser === ${page.onceGeneratedUser}`);

    await page.submitUser(page.onceGeneratedUser);
    await t
        .expect(page.header.innerText).contains(page.onceGeneratedUser);

    await t.navigateTo(page.startURL);
    await page.submitUser(page.onceGeneratedUser);
    await t
        .expect(page.header.innerText).contains(page.onceGeneratedUser);
});
