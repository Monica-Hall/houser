module.exports = {
    
    addListing: (req, res) => {
        const db = req.app.set('db')
        const {name, address, city, state, zipcode, img, mortgage, rent} = req.body

        db.add_listing([name, address, city, state, zipcode, img, mortgage, rent]).then(listing => {
            res.status(200).send(listing)
        })
    }, 

    getAll: (req, res) => {
        const db = req.app.set('db')

        db.get_all().then(listing => {
            res.status(200).send(listing)
        })
    }, 

    deleteListing: (req, res) => {
        const db = req.app.set('db')
        const {id} = req.params

        db.delete_listing([id]).then(listing => {
            res.status(200).send(listing)
        })
    }
}