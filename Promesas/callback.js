'use strict'

const fs = require('fs'),
    file = './assets/nombres.txt',
    newFile =  './assets/nombres-callback.txt'
fs.access(file, fs.F_OK, (err) => {
    if (err) {
        console.log('El archivo no existe')
    } else {
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            fs.writeFile(newFile, data, (err) => {
                return (err) ? 
                console.log('El archivo no se pudo copiar!') : 
                console.log('El archivo se a copiado con éxito!')
                
            });
        });
    }
});