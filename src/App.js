import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar';
import Form from './components/Form';
import fakeData from './api/calendar.json';

 class App extends Component {
   constructor(){
    super();
    this.state = {
      users: [],
      posts: [],
      dummieUsers: [],
      fakePosts: []
    }
    //uncomment when working with SQL database
    // fetch('http://localhost:3000')
    // .then(response => response.json())
    // .then(users => this.setState({users: users.users}))
    // .catch(error => console.log(error));
  }

  componentDidMount(){
    this.setState({ dummieUsers: fakeData.users, fakePosts: fakeData.posts})
  }
  render(){
    return (
      <div className="App">
        <Header users={this.state.users} dummieUsers={this.state.dummieUsers}/>
        <Calendar fakePosts={this.state.fakePosts}/>
        <Form/>
      </div>
    );
  }
}

export default App;


/* <li> {users.map(user => {
                  return user.username
                })}
          </li> */