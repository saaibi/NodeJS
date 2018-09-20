'use strict'

const http = require('http').createServer(webServer),
    path = require('path'),
    urls = [
        {
            route: '',
            output: '<h2>Home</h2>'
        },
        {
            route: 'acerca',
            output: '<h2>Acerca</h2>'
        },
        {
            route: 'contacto',
            output: '<h2>Contacto</h2>'
        }
    ]

const hostname = 'localhost';
const port = 3000;

function webServer(req, res) {
    var message = '<h1>Hola Node.js</h1>',
        pathURL = path.basename(req.url)
    urls.forEach(function (pos) {
        if (pos.route == pathURL) {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(message + pos.output)
        }
    })
    if (!res.finidhed){
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end('<h1>Error 404: Not found</h1>')
    }
}

http.listen(port, hostname)
console.log(`Server running at http://${hostname}:${port}/`)