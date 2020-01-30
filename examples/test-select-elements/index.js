import { Selector } from 'testcafe';

fixture `Select element manipulation`
    .page `./index.html`;

const citySelect = Selector('#city');
const cityOption = citySelect.find('option');

test(`Select an option from the drop-down menu`, async t => {
    await t
        .click(citySelect)
        .click(cityOption.withText('London'))
        .expect(citySelect.value).eql('London');
});
