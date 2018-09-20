'use strict'

const http = require('http'),
    options ={
        host: 'jonmircha.com',
        port: 80,
        path: '/',
    }

http
    .get(options, (res) => {
        console.log(`El sitio ${options.host} ha respondido. Codigo de estado : ${res.statusCode}` )
    })
    .on('error', (err) => {
        console.log(`El sitio ${options.host} no respondio. Codigo de estado : ${err.code} Error: ${err.message}` )
    })