'use strict'

const http = require('http').createServer(webServer),
      fs = require('fs'),
      index = fs.createReadStream('assets/index.html')

const hostname = 'localhost';
const port = 3000;

function webServer(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html')
  index.pipe(res) 
}

http.listen(port,hostname)
  console.log(`Server running at http://${hostname}:${port}/`)