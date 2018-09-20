'use strict'


var http = require('http'),
    form = require('fs').readFileSync('./form.html'),
    querystring = require('querystring'),
    util = require('util'),
    dataString = ''

//intancia de servidor http
http
    .createServer((req, res) => {
        if (req.method == 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(form)
        }
        if (req.method == 'POST') {
            req
                .on('data', (data) => {

                    dataString += data
                })
                .on('end', function () {
                    console.log('hola ' + dataString)
                    var dataObject = querystring.parse(dataString),
                        dataJson = util.inspect(dataObject),
                        templateString = `
los datos string son: ${dataString}
los datos json son: ${dataJson}
                        `

                    console.log(templateString)
                    res.end(templateString)
                })
        }
    })
    .listen(3000)
console.log(`Server running at http://localhost:3000/`)