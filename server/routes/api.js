const express = require('express')
const router = express.Router()



router.get('/',(req,res) => {
    res.send('Hello API Roitai 55')
})

router.get('/roitai',(req,res) => {
    res.send('api')
})

module.exports = router
