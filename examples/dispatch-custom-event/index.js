import { Selector } from 'testcafe';

fixture`Dispatch Events`
    .page('./index.html');

test('Dispatch a TouchEvent', async t => {
    const target       = Selector('#target');
    const eventType    = Selector('#eventType');
    const isCancelable = Selector('#isCancelable');
    const isBubbling   = Selector('#isBubbling');

    // const eventArgs = {
    //     cancelable: false,
    //     bubbles:    false
    // };

    // const options = Object.assign(
    //     { eventConstructor: 'TouchEvent' },
    //     eventArgs
    // );

    await t
        // .dispatchEvent(target, 'touchstart', options)
        .expect(target.innerText).eql('Event triggered!')
        .expect(eventType.innerText).eql('TouchEvent')
        .expect(isCancelable.innerText).eql('false')
        .expect(isBubbling.innerText).eql('false');
});