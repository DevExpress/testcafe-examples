import { ClientFunction } from 'testcafe';

// testcafe "chrome --autoplay-policy=no-user-gesture-required" examples/call-page-functions-with-arguments/call-page-functions-with-arguments.js

fixture `Portal Experience playback`
    .page `https://www.youtube.com/watch?v=I6WuCe1My9w`
    .meta({ autoplay: true });

test('Testing YouTube', async t => {
    const play        = ClientFunction(() => document.querySelector('.video-stream').play());
    const pause       = ClientFunction(() => document.querySelector('.video-stream').pause());
    const currentTime = ClientFunction(() => document.querySelector('.video-stream').currentTime);
    const setTime     = ClientFunction((time) => document.querySelector('.video-stream').currentTime = time);

    await pause();

    await setTime(60);
    console.info(`Video time is ${await currentTime()}`);

    await play();

    await t.wait(10000);
    console.info(`Video time is ${await currentTime()}`);
});