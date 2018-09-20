
'use strict'

var Clock = (function () {
    var EventEmitter = require('events').EventEmitter,
        inherits = require('util').inherits

    var Clock = function () {
        setInterval(() =>  {
            this.emit('tictac')
        }, 1000)
    }
    inherits(Clock, EventEmitter)

    Clock.prototype.theThime = function () {
        let date = new Date(),
            hrs = addZero( date.getHours() ),
            min = addZero( date.getMinutes() ),
            sec = addZero( date.getSeconds() ),
            ampm = ( hrs < 12 ) ? 'am' : 'pm',
            //msg = hrs + ':' + min + ':' + sec + ampm
            msg = `${hrs}:${min}:${sec}:${ampm}`
        function addZero(num){
            return (num < 10) ? ('0' +num) : num
        }
        console.log(msg)
    }
    return Clock;
})()


module.exports = Clock