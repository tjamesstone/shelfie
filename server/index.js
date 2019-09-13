require('dotenv').config()

const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()

app.use(express.json())

app.get("/api/products", ctrl.getAll)
app.post("/api/products", ctrl.post)
app.delete('/api/products/:id', ctrl.delete)

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('Connected to Database')
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})
.catch(err => console.log(err))