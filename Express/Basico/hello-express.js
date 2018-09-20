'use strict'
const express = require('express'),
    app = express(),
    hostname = 'localhost',
    port = 3000

app.get('/', (req, res) => {
        res.send('hello world');
    })


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});