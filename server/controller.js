module.exports ={
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all_products()
        .then (result => {
            console.log(result)
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "Error yo"})
            console.log(err)
        })
    },
    post: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img_url} =req.body
        db.create({name, price, img_url})
        .then(result => {
            res.status(200).send(result)
        })
        .catch( err => {
            res.status(500).send({errorMessage: "Error yo"})
            console.log(err)
        })
    }, 
    delete (req,res) {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_product(id).then(result => {
          res.sendStatus(200)
        }).catch(err => {
          console.log(`ERROR: ${err}`)
          res.status(500).send(`Failed to delete record`)
        })
      },
}