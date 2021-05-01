const express = require('express')
const app = express()
const port = 3001
//publish client folder
app.use(express.static("client"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
