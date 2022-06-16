import React, { Component } from 'react'

import Task from './Task'

export default class Tasks extends Component {
    
  render() {
    return (
      <div>
        {this.props.tasks.map(task => <Task task={task} key={task.id} deleteTask={this.props.deleteTask} checkDone={this.props.checkDone} />)}
      </div>
    )
  }
}
