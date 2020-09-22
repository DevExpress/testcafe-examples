import { Selector } from 'testcafe'

fixture `Check table row content`
    .page('./index.html')

test('Check table row content', async t => {
    const rowData = {
        id: '2',
        firstName: 'Oliver',
        lastName: 'Black'
    }
    const row = Selector('td').withText(rowData.id).parent();

    await t.click(row);

    await t
        .expect(row.child('td').nth(0).innerText).eql(rowData.id)
        .expect(row.child('td').nth(1).innerText).eql(rowData.firstName)
        .expect(row.child('td').nth(2).innerText).eql(rowData.lastName)
})