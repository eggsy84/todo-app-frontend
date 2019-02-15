import React, { Component } from 'react';
import Header from './components/Header';
import TaskEntry from './components/TaskEntry';
import TaskList from './components/TaskList';
import TasksService from './service/tasks';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
  }

  async componentDidMount() {
    const tasks = await TasksService.getTasks();
    this.setState({tasks: tasks});
  }

  async addTask(task) {

    const response = await TasksService.saveTask(task);

    task.taskId = response.insertId;

    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task);
    this.setState({
      tasks: currentListOfTasks
    });
  }



  render() {
    return (
      <div className="container">
        <Header />
        <TaskEntry onSaveTaskHandler={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
