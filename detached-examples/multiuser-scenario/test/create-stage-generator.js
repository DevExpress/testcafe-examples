const WebSocket = require('ws');

let checker = false;

module.exports = function createStageGenerator (scenario, role) {
    console.log(checker); checker = true;
    return new Promise((resolveRole, rejectRole) => {
        const ws = new WebSocket('ws://localhost:8080');
    
        ws.on('open', () => ws.send(JSON.stringify({ scenario, role })));

        function stage (description, timeout = 600) {
            return new Promise((resolveStage, rejectStage) => {
                ws.onmessage = message => {
                    message.data === description ? resolveStage() : rejectStage();
                }
        
                ws.send(description);
        
                setTimeout(rejectStage, timeout);
            });
        };
    
        ws.onmessage = message => {
            if (message.data === 'ok')
                resolveRole(stage);
            else
                rejectRole('Role rejected:', message.data);
        };

        setTimeout(rejectRole, 2000, new Error('Timed out waiting for role confirmation'));
    });
};
