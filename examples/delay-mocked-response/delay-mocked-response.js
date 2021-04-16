import { Selector, RequestMock } from 'testcafe';
import delay from 'delay';

const MOCK_RESPONSE_DELAY = 5000;

const mock = RequestMock()
    .onRequestTo(/request/)
    .respond(async (req, res) => {
        await delay(MOCK_RESPONSE_DELAY);

        res.setBody('mocked content');
    });

fixture `Delay mocked response`
    .page `http://localhost:3000/examples/delay-mocked-response/index.html`;

test.requestHooks(mock)('Check that the mocked response was delayed', async (t) => {
    await t
        .click('#send-request')
        .expect(Selector('#response').textContent)
        .eql('mocked content', { timeout: MOCK_RESPONSE_DELAY + 3000 });

    const elapsedTime = await Selector('#elapsed-time').textContent;

    await t.expect(parseInt(elapsedTime, 10)).gte(MOCK_RESPONSE_DELAY);
});
