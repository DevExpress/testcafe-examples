const http       = require('http');
const fs         = require('fs');
const path       = require('path');
const multiparty = require('multiparty');

const SERVER_PORT = 3000;

const CONTENT_TYPES = {
    '.js':   'application/javascript',
    '.css':  'text/css',
    '.html': 'text/html',
    '.png':  'image/png',
    '.zip':  'application/zip',
    '.pdf':  'application/pdf'
};

http
    .createServer((req, res) => {
        console.log(req.url);

        if (req.url === '/download-file') {
            const fileStream = fs.createReadStream('./server/data/text-file.txt');

            res.setHeader('content-disposition', 'attachment; filename=text-file.txt');
            fileStream.pipe(res);
        }

        else if (req.url === '/upload') {
            const form = new multiparty.Form();

            form.parse(req, (err, fields, filesData) => {
                res.setHeader('content-type', CONTENT_TYPES['.html']);

                const uploadedFilesHtml = filesData.files.reduce((html, file) => {
                    return html += `<li>${file.originalFilename}</li>\n`;
                }, '');

                const resultHtml = `
                <html>
                    <body
                        <h1>Uploaded files</h1>
                        <ul id="uploaded-file-list">${uploadedFilesHtml}</ul>
                    </body>
                </html>
                `;

                res.end(resultHtml);
            });
        }
        else {
            const repositoryRoot = path.resolve(__dirname, '..');
            const resourcePath   = path.join(repositoryRoot, req.url);
            const content        = fs.existsSync(resourcePath) ? fs.readFileSync(resourcePath).toString() : '';
            const contentType    = CONTENT_TYPES[path.extname(resourcePath)];

            if (contentType)
                res.setHeader('content-type', contentType);

            res.end(content);
        }
    })
    .listen(SERVER_PORT);
