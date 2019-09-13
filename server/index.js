require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))
})

app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getById)
app.post('/api/products', ctrl.create)
app.delete(`/api/products/:id`, ctrl.delete)
app.put(`/api/products/:id`, ctrl.update)