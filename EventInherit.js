
'use strict'

var EventEmitter = require('events').EventEmitter,
    inherits = require('util').inherits

var Clock = function(){
    let self = this
    setInterval(function(){
        self.emit('tictac')
    }, 1000)

}
inherits(Clock, EventEmitter)

Clock.prototype.theThime = function()
{
    let date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ':' + min + ':' + sec
    console.log(msg)
}

var cucu = new Clock();
cucu.on('tictac',function(){
    cucu.theThime()
})
