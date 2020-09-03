const http = require('http');
const fs   = require('fs');

const SERVER_PORT = 3000;

http
    .createServer((req, res) => {
        console.log(req.url);

        if (req.url === '/download-file') {
            const fileStream = fs.createReadStream('./data/text-file.txt');

            res.setHeader('content-disposition', 'attachment; filename=text-file.txt');
            fileStream.pipe(res);
        }
        else
            res.end();
    })
    .listen(SERVER_PORT);
