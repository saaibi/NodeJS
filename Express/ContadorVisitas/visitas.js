'use strict'
const express = require('express'),
    app = express(),
    cookieSession = require('cookie-session'),
    cookieParser = require('cookie-parser'),

    hostname = 'localhost',
    port = 3000

app
    .use(cookieParser())
    .use(cookieSession({ secret: "secreto" }))

    .get('/', (req, res) => {
        req.session.views || (req.session.views = 0)
        let n = req.session.views++
        res.end(`
                <h1>
                    Hola desde Express, me has visitado ${n} veces
                </h1>
                `);
    })


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});