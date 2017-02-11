## Lets use the latest and greatest syntax ES features

To fix this, open `jspm.config.js` and add `"stage": 0` under `babelOptions`:
```
System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 0,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  ...
```

test0.js
```
function decorator() {}

@decorator
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

Compiling this will produce an error:
```
./node_modules/.bin/jspm bundle-sfx ./test0.js
```
```
     Building the single-file sfx bundle for ./test0.js...

err  Error on translate for test0.js at file:///home/mike/git/te2/test0.js
        SyntaxError: file:///home/mike/git/te2/test0.js: Unexpected token (4:0)
     function decorator() {}
...
```

Need to allow babel transpile decorator syntax
