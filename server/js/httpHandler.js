const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
require('./messageQueue');


// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (messageQueue) => {
  return (req, res, next = ()=>{}) => {
    if (req.method === 'GET') {
      res.writeHead(200, headers);
      console.log('Serving request type ' + req.method + ' for url ' + req.url);

      //console.log();

      res.end(messageQueue.dequeue());
    } 
  }

};
