const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request)

  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({name:"Kartik", Age:"Infi"}))
})

server.listen(3000)