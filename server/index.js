const http = require('http');
const fs = require('fs');

const SERVER_PORT = 3000;

http
    .createServer((req, res) => {
        console.log(req.url);

        if (req.url === '/download-file') {
            const fileStream = fs.createReadStream('./data/text-file.txt');

            res.setHeader('content-disposition', 'attachment; filename=text-file.txt');
            fileStream.pipe(res);
        }

        else if (req.url == '/download-random-file') {
            let fileName = generateFileName();
            let fileContents = generateFileContents();
            let filePath = `./data/${generateFileName()}`;

            fs.writeFileSync(`./data/${fileName}`, fileContents, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
            });
            res.setHeader('content-disposition', `attachment; filename=${fileName}`);

            let readStream = fs.createReadStream(`${filePath}`);

            readStream.on('open', () => readStream.pipe(res));
            readStream.on('error', (err) => {
                console.log("Error while creating read stream.");
                res.end(err)});   

            fs.unlink(`${filePath}`, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
            });
        }

        else
            res.end();
    })
    .listen(SERVER_PORT);


function generateFileName() {
    const now = new Date();
    //file_hh-mm-ss.txt 
    return `file_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.txt`;
};

function generateFileContents() {
    let contents, n=0;
    do {contents += Math.random().toString(36).substring(2);
        n++;
    }
    while (n < 100);
    return contents;
};
