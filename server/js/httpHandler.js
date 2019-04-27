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
      // if(req.url === '/') {
      //   res.writeHead(200, headers);
      //   console.log('Serving request type ' + req.method + ' for url ' + req.url);
      //   res.end(messageQueue.dequeue());
      // }
      if(req.url === '/background.jpg' ) {
        fs.readFile(path.join('.', 'background.jpg'), function(err, data){
          if(err) throw err;
          if(data) {
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(data);
          } else {
            res.writeHead(404, headers);
          }
        });
      }
    } 
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk; // convert Buffer to string
      });
      // console.log(file);
      req.on('end', () => {
        //console.log(body);
        fs.writeFile('background.multipart', body, (err) => {
          if(err) console.log(err);
          console.log('write multipart successfully!');
        });
        var filename = path.join('.', 'background.multipart');
        fs.readFile(filename, (err, fileData) =>{
          var file = multipart.getFile(fileData);
          console.log('data in the Buffer',file.data);
          fs.writeFile('background.jpg', file.data, 'binary', (err) => {
            fs.readFile(path.join('.', 'background.jpg'), (err, data) => {
              console.log('data from overwritten file', data);
            });
            if(err) console.log(err);
            console.log('overwrite successfully!');
          });
        });
        
        res.end('ok');
      });
      // res.writeHead(200, headers);
      // res.end();
      //var file = multipart.getFile(req);
      
    }
  }

};
