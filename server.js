const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.json())

app.use('/api/v1', require('./routes/v1'))

/*app.get('/', middleware, (req, res) => {
    res.send('Hello')
})*/

app.get('*', (req, res) => {
    //res.status(404).json({ message: 'Not found'}) bonne pratique
    res.sendFile(__dirname + "/view/404.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function middleware(req, res, next){
    console.log('coucou')
    next()
}