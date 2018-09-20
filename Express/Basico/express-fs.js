'use strict'
const express = require('express'),
    app = express(),
    hostname = 'localhost',
    port = 3000



app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/assets/index.html`)
})


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});