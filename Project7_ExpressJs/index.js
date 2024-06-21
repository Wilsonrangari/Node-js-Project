const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('This is my home page')
})

app.get('/greet', (req, res) => {
    res.send('Hello, good morning')
})

app.listen(8000);