'use strict'

const fs = require('fs'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-promises-ES6.txt'

let promises = new Promise((resolve, reject) => {
    fs.access(file, fs.F_OK, (err) => {
        return (err) ? reject(new Error('El archivo no existe!')) : resolve(true)
    })
})

promises
    .then( (dataPromise) => {
        console.log('El archivo existe!')
        return new Promise((resolve, reject) => {
            fs.readFile(file, (err, data) => {
                return (err) ? reject(new Error('El archivo no se pudo leer!')) : resolve(data)
            })
        })
    })
    .then( (dataPromise) => {
        console.log('El archivo se ha leido exitosamente!')
        return new Promise((resolve, reject) => {
            fs.writeFile(newFile, dataPromise, (err) => {
                return (err) ? reject(new Error('El archivo no se pudo copiar!')) : resolve('El archivo se a copiado con éxito!')
            })
        })
    })
    .then( (dataPromise) => {console.log(dataPromise)})
    .catch( (err) => {console.log(err.message)})