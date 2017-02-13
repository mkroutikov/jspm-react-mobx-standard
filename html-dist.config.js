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
        src: 'https://unpkg.com/react@15/dist/react.js'
      }),
      script({
        src: 'https://unpkg.com/react-dom@15/dist/react-dom.js'
      }),
      script({
        src: 'https://unpkg.com/mobx@3/lib/mobx.umd.js'
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
