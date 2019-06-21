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
      fakeData: [],
      selectedDate: ""
    }
    //uncomment when working with SQL database
    // fetch('/api/users')
    // .then(response => response.json())
    // .then(users => this.setState({users: users.users}))
    // .catch(error => console.log(error));
  }

  componentDidMount(){
    // fetch('http://localhost:3000/api/users')
    // .then(response => response.json())
    // .then(users => this.setState({ users }))
    // .catch(error => console.log(error));

    // fetch('http://localhost:3000/api/calendar')
    // .then(response => response.json())
    // .then(posts => this.setState({ posts }))
    // .catch(error => console.log(error));

    this.setState({ fakeData })
  }

  selectDate = date => {
    this.setState({selectedDate: date.selectedDate})
  }
  
  render(){
    return (
      <div className="App">
        <Header users={this.state.users} fakeData={this.state.fakeData}/>
        <Calendar fakeData={this.state.fakeData} onDateSelect={this.selectDate}/>
        <Form date={this.state.selectedDate}/>
      </div>
    );
  }
}

export default App;


