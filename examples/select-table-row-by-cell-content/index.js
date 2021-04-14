import { Selector } from 'testcafe';

fixture `Select a table row by cell contents`
    .page('./index.html');

test('Select a table row by cell contents', async t => {
    const rowData = {
        id:        '2',
        firstName: 'Oliver',
        lastName:  'Black'
    };
    const row = Selector('td').withText(rowData.id).parent();

    await t
        .click(row)
        .expect(row.child('td').nth(0).innerText).eql(rowData.id)
        .expect(row.child('td').nth(1).innerText).eql(rowData.firstName)
        .expect(row.child('td').nth(2).innerText).eql(rowData.lastName)
        .expect(row.hasClass('highlighted')).ok();
});