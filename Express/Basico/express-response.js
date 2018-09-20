'use strict'
const express = require('express'),
    app = express(),
    hostname = 'localhost',
    port = 3000

app
    .get('/', (req, res) => {
        res.send('hello world');
    })
    .get('/bextlan', (req, res) => {
        res.redirect(301,'http://bextlan.com')
    })
    .get('/json', (req, res) => {
        res.json({
            name: "jhonathan",
            age : 31
        })
    })
    .get('/render', (req, res) => {
        res.render('assets/index.html'); //error 
    })
    

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});