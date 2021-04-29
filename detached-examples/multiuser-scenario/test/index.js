const scenarioGist = require('./scenario-gist');
const server       = require('./server/index');


server.on('listening', async () =>{
    await scenarioGist();

    server.close();
});
