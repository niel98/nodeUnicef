const express = require('express')
const colors = require('colors')

const app = express()

const PORT = process.env.PORT || 5000

//bodyParser
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.send('Welcome to home')
})
//Define routes
app.use('/email', require('./routes/email'))

app.listen(PORT, (req, res) => {
    // res.send(`Server running on ${PORT}`)
    console.log(`Server running in dev mode and testing on ${PORT}`.yellow.underline)
})