const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')

const app = express()


const port = '3000'
app.listen(port, ()=>{
    console.log('Server is runing on port '+port)
})