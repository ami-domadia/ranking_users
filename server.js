const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./app.js')
const {syncAndSeed} = require('./db.js')
const path = require('path')

const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
// Body parsing middleware
//app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname,'dist')))
app.use('/', router)


syncAndSeed()
.then((app.listen(PORT, ()=>{
    console.log('Your server is listening on port', PORT)
})))
.catch((err)=> console.log(err))

module.exports = app