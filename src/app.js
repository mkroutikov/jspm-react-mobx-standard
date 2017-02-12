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
