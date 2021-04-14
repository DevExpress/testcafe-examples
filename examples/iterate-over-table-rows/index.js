import { Selector } from 'testcafe';

fixture `Iterate through table rows`
    .page('./index.html');

test('Check employees', async t => {
    const table        = Selector('table');
    const dataRows     = table.find('tbody > tr');
    const dataRowCount = await dataRows.count;

    for(let i = 0; i < dataRowCount; i++) {
        const currentRow   = dataRows.nth(i);
        const fullNameCell = currentRow.child('td').nth(1);
        const isEvenRow    = !(i % 2);

        await t.expect(fullNameCell.textContent).contains('Smith');

        if (isEvenRow) {
            const isRetiredCheckbox = currentRow.find('input[type=checkbox]');

            await t.expect(isRetiredCheckbox.hasAttribute('checked')).ok();
        }
    }
});
