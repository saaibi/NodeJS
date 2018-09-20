'use strict'

class Clock {

    constructor() {
        setInterval(() => {
            this.theThime()
        }, 1000)
    }

    theThime () {
        let date = new Date(),
            hrs = addZero(date.getHours()),
            min = addZero(date.getMinutes()),
            sec = addZero(date.getSeconds()),
            ampm = (hrs < 12) ? 'am' : 'pm',
            //msg = hrs + ':' + min + ':' + sec + ampm
            msg = `${hrs}:${min}:${sec}:${ampm}`
        function addZero(num) {
            return (num < 10) ? ('0' + num) : num
        }
        console.log(msg)
    }
}

module.exports = Clock