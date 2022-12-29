const { Server }   = require('./server');
const { runTests } = require('./run-tests');

async function start () {
    const server = new Server();

    server.run();

    const nFailed = await runTests(['./test.js', './test.testcafe']);

    await server.close();

    if (nFailed)
        process.exit(1);
}

start();
