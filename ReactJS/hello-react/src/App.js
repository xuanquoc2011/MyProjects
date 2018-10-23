import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Person extends React.Component {
  render() {
    return (
      <div className='person-info'>
        <h3>Person {this.props.personNo};</h3>
        <ul>
          <li>First Name: {this.props.firstName}</li>
          <li>Last Name: {this.props.lastName}</li>
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="people">
        <Person personNo='1' firstName='aa' lastName='bb'/>
        <Person personNo='2' firstName='cc' lastName='dd'/>
      </div>
    );
  }
}

export default App;
