const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 4500;

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'HTML', req.url === '/' ? 'video-page.html' : req.url);

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.mp4':
            contentType = 'video/mp4';
            break;
        default:
            contentType = 'text/html';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end('Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});