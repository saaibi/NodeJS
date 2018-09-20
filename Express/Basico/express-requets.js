'use strict'
const express = require('express'),
    app = express(),
    hostname = 'localhost',
    port = 3000

app
    .get('/', (req, res) => {
        res.end('<h1> hello world :) </h1>');
    })
    .get('/user/:id', (req, res) => {
        res.end(`<h1> Bienvenid@ a express :) ${req.params.id} </h1>`);
    })
    .get('/search', (req, res) => {
        res.end(`
        <h1> Bienvenid@ a express,  los resultados de tu busqueda son:
         <mark> ${req.query.s} </mark>
        </h1>`);
    })


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});