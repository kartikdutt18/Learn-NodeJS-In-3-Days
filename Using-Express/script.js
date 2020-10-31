const express = require('express')

var count = 0
const app = express()

app.use((req, res, next) => {
  count++
  console.log("You visited this Page :", count, "Times");
  next();
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) =>{
  res.send("<p>hello!</p>")
})

app.post('/some-url', (req, res) =>{
  console.log(req.body)
})
app.listen(3000)