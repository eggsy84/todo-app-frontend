import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <TaskList />
      </div>
    );
  }
}

export default App;
