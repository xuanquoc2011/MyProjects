import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {user3s:[]}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(user3s => this.setState({user3s}));
  }

  render() {
    return(
      <div className="App">
        <h1>Users</h1>
        {this.state.user3s.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
