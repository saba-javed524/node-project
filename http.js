const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, './index.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });



    } if (req.url === '/minion') {
        fs.readFile(path.join(__dirname, 'minion.html'), (err, data) => {
            res.write(data);
            res.end();
        });


    }

});

server.listen(3000, () => console.log('Server is up and runnung!'));