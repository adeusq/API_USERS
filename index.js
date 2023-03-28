const express = require('express')
const app = express()
const morgan = require('morgan')
const Router = require('./config/app')
const connection = require('./database/connection')

app.use(express.urlencoded({ extended:false}))
app.use(express.json())

app.use(morgan('tiny'))

Router(app)

connection
    .authenticate()
    .then(() => console.log('Conectado com banco de dados.'))
    .catch(err => console.log(err))

app.listen(3000, () => console.log('Servidor rodando na porta 3000')) 