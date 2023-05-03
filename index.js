const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).json({ msg: "Hello World!" })
})

app.get('/test/', (req, res) => {
  res.status(200).json({ msg: "Test called!!!" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
