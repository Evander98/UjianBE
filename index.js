const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 2000

const { movieRouter, categoryRouter, movCatRouter } = require('./router')

app.use(bodyParser.json())

app.use('/movies', movieRouter)
app.use('/categories', categoryRouter)
app.use('/movCat', movCatRouter)

app.get('/', (req, res) => {
    res.send('<h1>Ini Home Page</h1>')
})


app.listen(port, () => console.log("Server Running on Port " + port))