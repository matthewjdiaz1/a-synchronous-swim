
const messageQueue = require('./js/messageQueue');
require('./js/keypressHandler').initialize(messageQueue);
const httpHandler = require('./js/httpHandler').router(messageQueue);

const http = require('http');

const server = http.createServer(httpHandler);


const port = 8080;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
