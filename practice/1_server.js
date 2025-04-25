// import http from 'http';
const http = require('http');

// localhost -> 127.0.0.1 -> loopback address -> local machine
const host = "localhost";
const port = 3000;

// req -> request  
const server = http.createServer((req, res) => {
    // res -> response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});

