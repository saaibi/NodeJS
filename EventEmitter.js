
'use strict'

var EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter()

pub
    .on('myevent', function(message){
            console.log(message)
        })
        .once('myevent', function(message){
            console.log('se emite la primera vez: ' + message)
        })

pub.emit('myevent', 'Soy un emisor de eventos ')
pub.emit('myevent', 'Volviendo a emitir')
pub.removeAllListeners('myevent')
pub.emit('myevent', 'volviendo a emitir por 3 vez')