require('dotenv').config(); 
const express = require('express'); 
const massive = require('massive'); 
const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env; 

const app = express(); 
app.use(express.json()); 

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected to db')
})

//GET ALL
app.get('/api/houses', ctrl.getAll); 

//POST
app.post('/api/house', ctrl.addListing); 

//DELETE
app.delete('/api/house/:id', ctrl.deleteListing)

app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`))