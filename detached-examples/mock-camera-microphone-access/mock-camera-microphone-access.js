import { Selector } from 'testcafe';

fixture`Mock microphone/camera access`
    .page('./index.html');

test('take a photo', async t => {
    const photoButton = Selector('#photoButton')
    const photoFrame  = Selector('#photo').addCustomDOMProperties({
        src: el => el.src
    });

    await t
        .click(photoButton)
        .expect(photoFrame.src).match(/data:image\/png;base64,.*/);
});

test('check an audio element source', async t => {
    const audioFrame = Selector('audio').addCustomDOMProperties({

        //this property is true if the element has a source, otherwise false

        hasSource: el => !!el.srcObject
    });

    await t
        .expect(audioFrame.hasSource).ok();
});
