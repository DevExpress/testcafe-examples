const { execSync } = require('node:child_process');

const createTestCafe = require('testcafe');

async function runTestCafe () {
    const testcafe = await createTestCafe('localhost', 0, 0);
    const runner   = testcafe.createRunner();

    const failedCount = await runner
        .src('test.js')
        .browsers('chrome:headless')
        .run();

    await testcafe.close();

    return !!failedCount;
}

function startServer () {
    execSync('docker run -d -it --name server -p 3000:5000 testcafe/testcafe-examples_kerberos-server');

    execSync('docker exec server /etc/init.d/krb5-admin-server restart');
    execSync('docker exec server /etc/init.d/krb5-kdc restart');

    execSync('docker exec server mkdir home/server');

    execSync('docker cp server/index.js server:home/server/index.js');
    execSync('docker cp server/package.json server:home/server/package.json');

    execSync('docker exec server sh -c "cd /home/server && npm i"');
    execSync('docker exec -d server node /home/server');
}

function startClient () {
    execSync('docker run -d -it --name client -p 3001:5000 testcafe/testcafe-examples_kerberos-client');

    execSync('docker exec client sh -c "echo \'172.17.0.2\ttestcafe.io\' >> etc/hosts"');

    execSync('docker exec client mkdir home/client');

    execSync('docker cp client/index.js client:home/client/index.js');
    execSync('docker cp client/package.json client:home/client/package.json');

    execSync('docker exec client sh -c "cd /home/client && npm i"');
    execSync('docker exec -d client node /home/client');
}

function removeContainers () {
    execSync('docker rm -f server');
    execSync('docker rm -f client');
}

async function start () {
    startServer();
    startClient();

    const isFailed = await runTestCafe();

    removeContainers();

    if (isFailed)
        throw 'Tests failed';
}

start();
