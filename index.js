const express = require('express')
const app = express()
const port = 5001


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Tommy:loveis1@boilerplate.davuq.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MangoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))