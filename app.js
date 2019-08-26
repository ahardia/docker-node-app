const express = require('express');
const fs = require('fs')
const app = express();

const PORT = process.env.PORT

app.get('/file', (req, res) => {
  try {
    const contents = fs.readFileSync('tmp/test.txt', 'utf-8')
    res.send(contents)
  } catch (err) {
    res.send('Error occured, ', err)
  }
})

app.listen(PORT, (err) => {
  if (err) return console.log('error occured')
  console.log(`server started on PORT ${PORT}`)
})