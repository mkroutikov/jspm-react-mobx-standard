## Building production minified bundle and html

To build minified bundle that excludes external dependencies, do this:
```
./node_modules/.bin/jspm bundle-sfx 'src/app.js - react - react-dom - mobx - mobx-react' \
   dist/build.js --minify \
   --globals "{'react': 'React', 'react-dom': 'ReactDOM', 'mobx': 'mobx', 'mobx-react': 'mobxReact'}"
```

We will use `html-dist` to build the distributable `index.html`

Install `html-dist`
```
npm install html-dist --save-dev
```

Create `html-dist.config.js`:
```
var script = require('html-dist').script

module.exports = {
  // where to write to
  outputFile: 'dist/index.html',
  // minify the HTML
  minify: true,
  head: {
    // in the <head>, remove any elements matching the 'script' CSS selector
    remove: 'script',
    appends: [
      script({
        src: 'https://unpkg.com/react@15.4.2/dist/react.js'
      }),
      script({
        src: 'https://unpkg.com/react-dom@15.4.2/dist/react-dom.js'
      }),
      script({
        src: 'https://unpkg.com/mobx@3.0.1/lib/mobx.umd.js'
      }),
      script({
        src: 'https://unpkg.com/mobx-react@4.0.1/index.min.js'
      }),
    ]
  },
  body: {
    // append the following things to the body
    remove: 'script',
    appends: [
      script({
        src: 'bundle.js'
      }),
      //googleAnalytics('UA-1234')
    ]
  }
}
```

And run it:
```
./node_modules/.bin/html-dist --config html-dist.config.js --input index.html
```

Now you should be able to start http server:
```
./node_modules/.bin/http-server -c-1
```
and navigate your browser to `localhost:8080/dist/index.html`
