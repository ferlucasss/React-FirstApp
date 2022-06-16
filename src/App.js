import React, {Component} from 'react';
import './App.css';
import Tasks from './components/Tasks';
import tasks from './sample/tasks.json'
import TaskForm from './components/TaskForm';

export default class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  checkDone = (id) => {
    const newTask = this.state.tasks.map(task => {
      if (task.id === id){
        task.done = !task.done
      }
      return task
    })
    this.setState({tasks: newTask})
  }

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTask})
  }
  
  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />
      </div>
    )
  }
}
