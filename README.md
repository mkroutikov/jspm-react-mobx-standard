## Hot-reloading of code into development server

First, lets create `run-server.js` code:
```
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
```

For this to work we need to add more dependencies to `node`:
```
npm install chokidar-socket-emitter --save-dev
```

Now you can start server by doing this:
```
node run-server.js
```
Every time some file is changed you will see a message:
```
File xxx emitter: change
```

Next step is to teach `index.html` to accept these events and reload modules.

For that we need to install
```
./node_modules/.bin/jspm install github:capaj/systemjs-hot-reloader
```

and change `index.html`:
```
<!DOCTYPE html>
<html>
  <head>
    <script src="jspm_packages/system.js"></script>
    <script src="jspm.config.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
    System.trace = true
    System.import('capaj/systemjs-hot-reloader').then(function(HotReloader){
      var hr = new HotReloader.default('http://localhost:8080')  // chokidar-socket-emitter port
      System.import('src/app.js').then(function () {
        console.log('ran at ', new Date())
      })
    })
    </script>
  </body>
</html>
```
