'use strict'

const fs = require('fs'),
    Q = require('q'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-promises-q.txt'

function existeFile(file) {
    let defer = Q.defer()
    fs.access(file, fs.F_OK, (err) => {
        return (err) ? defer.reject(new Error('El archivo no existe!')) : defer.resolve(true)
    })
    return defer.promise
}
function redFile(file) {
    let defer = Q.defer()
    console.log('El archivo existe!')
    fs.readFile(file, (err, data) => {
        return (err) ? defer.reject(new Error('El archivo no se pudo leer!')) : defer.resolve(data)
    })
    return defer.promise
}
function writeFile(file,data) {
    let defer = Q.defer()
    console.log('El archivo se ha leido exitosamente!')
    fs.writeFile(newFile, data, (err) => {
        return (err) ? defer.reject(new Error('El archivo no se pudo copiar!')) : defer.resolve('El archivo se a copiado con éxito!')
    })
    return defer.promise
}

/*
si existe
    -abrelo
    -leelo
    -copialo
    -manejo de errores
*/

existeFile(file)
    .then(() => { return redFile(file) })
    .then((dataPromise) => { return writeFile(newFile, dataPromise) })
    .then((dataPromise) => { return console.log(dataPromise) })
    .fail((err) => { return console.log(err.message) })