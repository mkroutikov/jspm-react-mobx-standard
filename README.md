## Use `standard.js` as a linter

```
npm install standard babel-eslint --save-dev
```

Edit `package.json` to add the following configuration options:
```
"standard": {
  "parser": "babel-eslint",
  "ignore": "jspm.config.js"
}
```

For convenience, lets hoor `standard` into `test` npm lifecycle: edit `package.json`:
```
"scripts": {
  "test": "./node_modules/.bin/standard src/**/*.js tests/**/*.js && node run-tests.js",
  "start": "node run-server.js"
},
```

Now to run `standard` linter and tests, one can do this:
```
npm test
```

And to start development server:
```
npm start
```
