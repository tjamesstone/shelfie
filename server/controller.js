module.exports = {
    getAll (req, res) {
      const db = req.app.get('db')
      db.get_all_products()
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => {
        console.log(`ERROR: ${err}`)
        res.status(500).send('Error Yo')
      })
    },
  
    getById (req, res) {
      const db = req.app.get('db')
      let {id} = req. params
      db.getById(id)
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => {
        console.log(`ERROR: ${err}`)
        res.status(500).send('Error Yo')
      })
    },
  
    create (req,res) {
      const db = req.app.get('db')
      let {name, price, img} = req.body
      db.create(name, price, img)
      .then(result =>{
        res.sendStatus(200)
      })
      .catch(err => {
        console.log(`ERROR: ${err}`)
        res.status(500).send('Error Yo')
      })
    },
  
    delete (req,res) {
      const db = req.app.get('db')
      let {id} = req.params
      db.delete_product(id)
      .then(result => {
        res.sendStatus(200)
      })
      .catch(err => {
        console.log(`ERROR: ${err}`)
        res.status(500).send('Error Yo')
      })
    },
  
    update (req, res) {
      const db=req.app.get('db')
      let {name, price, img} = req.body
      let {id} = req.params
  
      db.update(id, name, +price, img)
      .then(result => {
        res.sendStatus(200)
      })
      .catch(err => {
        console.log(`ERROR: ${err}`)
        res.status(500).send('Error Yo')
      })
    }
  }