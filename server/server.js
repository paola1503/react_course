const express = require('express')
const app = express()
const port = 3000
//activate cross origin request share
var cors=require("cors");
app.use(cors());

let students=[];
students.push({"name":"Joe",mark:5},{"name":"Anna",mark:7});
app.get("/students",(req, res)=>{
    res.send(students);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
