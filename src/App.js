import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

 class App extends Component {
   constructor(){
     super();
    this.state = {
      users: []
    }
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(users => this.setState({users: users.users}))
    .catch(error => console.log(error));
  }
  render(){
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;


{/* <li> {users.map(user => {
                  return user.username
                })}
          </li> */}