const http = require('http');
const fs = require('fs');

const hostName = 'localhost';
const port = 3000;


var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write("Hello world");
    res.end();
});

server.listen(port, hostName, () => {
    console.log("Server running on port " + port + "...")
})

