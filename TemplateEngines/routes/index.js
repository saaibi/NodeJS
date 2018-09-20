'use strict'

const express = require('express'),
router = express.Router()


router.get('/', (req,res) =>{
    res.end('terminamos la configuracion ')
})

module.exports = router