const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.  send('<h1>Hola Mundo</h1>')
})

app.listen(PORT, ()=>{
  console.log(`Server listening on port http://localhost:${PORT}`)
})