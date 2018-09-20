'use strict'

var myData = require('./my-data'),
    //Clock = require('./clockModuleES5'),
    Clock = require('./clockModuleES6'),
    cucu = new Clock();

console.log(
    myData.name,    
    myData.email,
    myData._phone
)
cucu.on('tictac', function () {
    cucu.theThime()
})
