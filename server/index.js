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
            let fileName = generateFile();
            let filePath = `./data/${generateFile()}`;

            fs.writeFileSync(`./data/${fileName}`, "This is a randomly generated file", (err) => {
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


function generateFile() {
    const now = new Date();
    //file_hh-mm-ss.txt 
    const filename = `file_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.txt`;
    return filename;
}
