const express = require('express')
const app = express()
const port = 3000
//activate cross origin request share
var cors=require("cors");
app.use(cors());

let students=[];
students.push({"name":"Joe",mark:5},{"name":"Anna",mark:7});

//Ex: Joe
app.delete("/students/:name",(req,res)=>{

  //Ex: object that has Joe as its name
  let selected=students.filter(function(element){
    return element.name==req.params.name;
  })[0];

  let index=students.indexOf(selected);
  students.splice(index,1);
  res.status(204).send();
})

app.post("/students",(req,res)=>{
  students.push(req.body);
  res.status(201).send();
})

app.get("/students",(req, res)=>{
    res.send(students);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
