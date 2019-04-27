const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  res.writeHead(200, headers);
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.end(JSON.stringify(req.url.substring(2)));
};
