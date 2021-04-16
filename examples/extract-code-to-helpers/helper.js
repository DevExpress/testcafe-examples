import { t } from 'testcafe';

export async function enterName (name) {
    await t.typeText('#developer-name', name);
}

export async function typeComment (text) {
    await t
        .click('#tried-test-cafe')
        .typeText('#comments', text);
}

export async function submitForm () {
    await t.click('#submit-button');
}
