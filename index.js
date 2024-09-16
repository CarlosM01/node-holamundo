const http = require('node:http')
const fs = require('node:fs')

const { findAvailablePort } = require('./free-port.js')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res)=>{
  console.log('Request received', req.url)

  if (req.url === '/') {
    res.statusCode = 200  //Por defecto
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hola Mundo')
  } 
  else if (req.url === '/gato'){
    const imgPath = path.join(__dirname, 'public', 'gato.png')
    //res.setHeader('Content-Type', 'image/png; charset=utf-8')
    fs.readFile(imgPath, (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Serever Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  }
}


const server = http.createServer(processRequest)

findAvailablePort(desiredPort).then(port => {
  server.listen(port, ()=>{
    console.log(`Server listening on port http://localhost:${port}`)
  })
})