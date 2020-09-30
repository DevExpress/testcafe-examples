import { Selector } from 'testcafe';

fixture `My fixture`
    .page `http://localhost:3000/examples/upload-files/index.html`;

test('Check uploaded files', async t => {
    const uploadedFileElements = Selector('#uploaded-file-list').child('li');

    await t
        .setFilesToUpload('#upload-input', [
            './uploads/text-file-1.txt',
            './uploads/text-file-2.txt'
        ])
        .click('#upload-btn')
        .expect(uploadedFileElements.count).eql(2)
        .expect(uploadedFileElements.nth(0).textContent).eql('text-file-1.txt')
        .expect(uploadedFileElements.nth(1).textContent).eql('text-file-2.txt');
});
