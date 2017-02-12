'use strict'
const httpServer = require('http-server')
const port = process.env.PORT || 8080
const emitter = require('chokidar-socket-emitter')

const server = httpServer.createServer({
  root: '.',
  cache: -1,
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
})

emitter({app: server.server})

server.listen(port, () => {
  console.log('Listening on port ', port)
})
