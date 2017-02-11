# Setting up jspm and babel

`babel` will be used to transile ES7 into ES5, `jspm` will be used to manage
dependencies and build production bundles.

1. `npm init`  (accept all the defaults)
2. `npm install jspm@beta --save-dev`  (need JSPM version 0.17.0 or better - still in beta stage)
3. `./node_modules/.bin/jspm init` (accept all defaults)

## Lets test if building a bundle works

Create file `src/app.js` and put some `class` syntax into it:
```
class X {
  constructor() {
    console.log('created instance of class X')
  }

  get blah() {
    return 'blah'
  }
}

const x = new X()

export default x
```

Try compiling a bundle:
```
./node_modules/.bin/jspm build src/app.js dist/build.js
node dist/build.js
```
Should work!

## Lets test if automatic transpiling in the browser works

Create file `index.html` and put the following into it:
```
<!DOCTYPE html>
<html>
  <head>
    <script src="jspm_packages/system.js"></script>
    <script src="jspm.config.js"></script>
  </head>
  <body>
    <script>
         System.import('./src/app.js').then(function (x) {
           console.log(x.default.blah)
           console.log('ran at ', new Date())
         })
    </script>
  </body>
</html>
```

Now, lets install `http-server` and run it
```
npm install http-server --save-dev
./node_modules/.bin/http-server -c-1
```

Direct you favorite browser to `localhost:8080`, open Dev tools and check JS
console. Should have no errors and some logging from JS code invoked.
