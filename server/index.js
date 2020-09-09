const http = require('http');
const fs   = require('fs');

const SERVER_PORT = 3000;

http
    .createServer((req, res) => {
        console.log(req.url);

        if (req.url === '/download-file') {
            const fileStream = fs.createReadStream('./server/data/text-file.txt');

            res.setHeader('content-disposition', 'attachment; filename=text-file.txt');
            fileStream.pipe(res);
        }
        
        if (req.method === 'POST' && req.url === '/upload'){
            //this is to avoid CORS-related errors in the browser
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Origin', '*');

            let body = '';
            req.on('data', chunk => {
                body += chunk.toString()
            });
            req.on('end', () => {
                //if no files received, respond with 204
                const isFile = /filename=\".*\"/i;
                if (!isFile.test(body)) res.statusCode = 204;
                console.log(body);
                res.end('ok');
            });
        }  
        else
            res.end();
    })
    .listen(SERVER_PORT);
