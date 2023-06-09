const express = require('express')
const app = express()
const morgan = require('morgan')
const Router = require('./config/app')
const connection = require('./database/connection')
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended:false}))
app.use(express.json())

app.use(morgan('tiny'))

app.use(expressLayouts)

Router(app)

connection
    .authenticate()
    .then(() => console.log('Connected with the database!'))
    .catch(err => console.log(err))

app.listen(3000, () => console.log('Server running on port 3000!')) 