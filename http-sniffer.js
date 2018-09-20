'use strict'

const http = require('http'),
    options ={
        host: 'bextlan.com',
        port: 80,
        path: '/',
    }
var htmlCode = ''

//intancia de cliente http
http
    .get(options, (res) => {
        console.log(`El sitio ${options.host} ha respondido. Codigo de estado : ${res.statusCode}` )
        res.on('data', (data) =>{
            htmlCode += data
            console.log(data)
        })
    })
    .on('error', (err) => {
        console.log(`El sitio ${options.host} no respondio. Codigo de estado : ${err.code} Error: ${err.message}` )
    })
//intancia de servidor http
http
    .createServer((req , res) => {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(htmlCode)
    })
    .listen(3000)