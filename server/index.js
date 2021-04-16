const http        = require('http');
const fs          = require('fs');
const path        = require('path');
const multiparty  = require('multiparty');
const url         = require('url');
const querystring = require('querystring');

const SERVER_PORT = 3000;

const CONTENT_TYPES = {
    '.js':   'application/javascript',
    '.css':  'text/css',
    '.html': 'text/html',
    '.png':  'image/png',
    '.zip':  'application/zip',
    '.pdf':  'application/pdf'
};

function isBinaryResource (contentType) {
    if (contentType === CONTENT_TYPES['.png'])
        return true;

    return false;
}

function stringifyContentIfNecessary (content, contentType) {
    if (!content)
        return content;

    return isBinaryResource(contentType) ? content : content.toString();
}

http
    .createServer((req, res) => {
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
                    html += `<li>${file.originalFilename}</li>\n`;
                    return html;
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
            const parsedUrl      = url.parse(req.url);
            const resourcePath   = path.join(repositoryRoot, parsedUrl.pathname);
            let content          = fs.existsSync(resourcePath) ? fs.readFileSync(resourcePath) : void 0;
            const contentType    = CONTENT_TYPES[path.extname(resourcePath)];
            const delay          = parseInt(querystring.parse(parsedUrl.query).delay || 0, 10);

            content = stringifyContentIfNecessary(content, contentType);

            if (contentType)
                res.setHeader('content-type', contentType);

            setTimeout(() => {
                res.end(content);
            }, delay);
        }
    })
    .listen(SERVER_PORT);
