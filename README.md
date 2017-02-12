## Time to add mobx and react

```
./node_modules/.bin/jspm install npm:mobx npm:react npm:mobx-react npm:react-dom
```

Now, change `src/app.js` to use `mobx`:
```
import {observable} from 'mobx'

class X {
  @observable someProperty = 0

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

Creating bundle with `jspm` should work:
```
./node_modules/.bin/jspm bundle-sfx src/app.js dist/build.js
node dist/build.js
```

## Lets create a ReactJS + mobx application

First, update `index.html` to create DOM `<div>` where web application
component will mount:
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
         System.import('./src/app.js').then(function (x) {
           console.log('ran at ', new Date())
         })
    </script>
  </body>
</html>
```

Then, change `src/app.js` to create a simple click counter:
```
import React from 'react'
import ReactDOM from 'react-dom'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

class State {
  @observable todos = []
  @observable text = 'Hello'

  addTodo (task) {
    this.todos.push({
      task: task,
      completed: false,
      assigneee: null
    })
  }
}

@observer
class MyComponent extends React.Component {

  @observable count = 0

  render = () => {
    return (
      <div onClick={this.handleClick}> - {this.count} - </div>
    )
  }

  handleClick = () => {
    this.count += 2
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'))
```

Run http server to see it working. Note that you can no longer run `build.js` with
`node`, because browser is required by React.
```
./node_modules/.bin/http-server -c-1
```
