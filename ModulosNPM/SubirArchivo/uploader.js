'use strict'

const http = require('http').createServer(serverUploader),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra')
const hostname = 'localhost';
const port = 3000;
var tempPath = '',
    fileName = ''

function serverUploader(req, res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload 
        let form = new formidable.IncomingForm();
        form
            .parse(req, function (err, fields, files) {
                tempPath = files.upload.path
                fileName = files.upload.name
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(`
                        <h1> Archivos Recibidos </h1>
                        <a href="/"> regresar </a>
                        <br><br>
                        <code>${util.inspect({ fields: fields, files: files })}</code>
                        `)
                res.end()
            })
            .on('progress', (bytesReceive, bytesExpected) => {
                let precentCompleted = (bytesReceive / bytesExpected) * 100
                console.log(precentCompleted.toFixed(2))
            })
            .on('error', (err) => {
                console.log(err)
            })
            .on('end', (fields, files) => {
                let newLocation = './upload/' + fileName
                fse.copy(tempPath, newLocation, (err) => {
                    if (err) return console.error(err)
                    console.log('success!')
                }) // copies file
            })
        return
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"><br>' +
        '<input type="file" name="upload" multiple="multiple"><br>' +
        '<input type="submit" value="Upload">' +
        '</form>'
    );
}

http.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});