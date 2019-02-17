const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

app.use((req, res, next) => {
  req.io = io
  return next()
})
app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(3000, () => console.log(`Server started on port 3000`))