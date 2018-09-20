'use strict'

function singleThread(){
    console.log(process.pid)
    console.log(process.title)
    console.log(process.execPath)
    console.log(process.cwd())
    console.log(process.version)
    console.log(process.platform)
    console.log(process.arch)
    console.log(process.uptime())
    console.log(process.argv)
}

singleThread()