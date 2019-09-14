require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json())

app.get('/api/products', ctrl.get_all_products)
app.get('/api/products/:id', ctrl.get_product)
app.post('/api/products', ctrl.create_product)
app.delete(`/api/products/:id`, ctrl.delete_product)
app.put(`/api/products/:id`, ctrl.update_product)

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))
})
