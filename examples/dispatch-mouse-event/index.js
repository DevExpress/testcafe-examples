import { Selector } from 'testcafe';

fixture`HTML Element`
    .page('./index.html');

test('Hold a left-click on a button for 5 seconds', async t => {
    const target = Selector('#target');
    const timer  = Selector('#timer');

    const MOUSE_OPTIONS = {
        buttons: 2
    }

    await t
        .dispatchEvent(target, 'mousedown', MOUSE_OPTIONS)
        .wait(5000)
        .dispatchEvent(target, 'mouseup', MOUSE_OPTIONS)
        .expect(timer.innerText).eql('5')
});