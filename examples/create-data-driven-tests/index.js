import { Selector } from 'testcafe';

const dataSet = require('./data.json');

fixture `Data-Driven Tests`
    .page `https://devexpress.github.io/testcafe/example/`;

dataSet.forEach(data => {
    test(`Enter '${data.name}'`, async t => {
        await t
            .typeText('#developer-name', data.name)
            .click('#tried-test-cafe')
            .typeText('#comments', data.comment)
            .click('#submit-button')
            .expect(Selector('#article-header').textContent).eql(data.resultText);
    });
});
