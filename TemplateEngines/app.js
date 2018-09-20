'use strict'
const express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    jade = require('jade'),
    routes = require('./routes/index.js'),
    faviconURL = `${__dirname}/public/img/boombeach.png`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    app = express()

app
    //configurando app
    .set('views', viewDir)
    .set('views engine', 'jade')
    .set('port', port)
    //ejecutamos middlewares
    .use(favicon(faviconURL))
    .use(morgan('dev'))
    .use(publicDir)
    //ejecutamos el middleware Enrutador
    .use('/',routes)

module.exports = app