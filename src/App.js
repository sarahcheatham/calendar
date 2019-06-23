import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar';
import FormContainer from './containers/FormContainer';
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
  }

  componentDidMount(){
    //uncomment when working with SQL database
    this.props.loadUsers();
    this.props.loadPosts();
    this.setState({ fakeData })
  }

  selectDate = date => {
    console.log("date:", date)
    this.setState({selectedDate: date.selectedDate})
  }
  
  render(){
    return (
      <div className="App">
        <Header users={this.state.users} fakeData={this.state.fakeData}/>
        <Calendar posts={this.props.posts.posts} fakeData={this.state.fakeData} onDateSelect={this.selectDate}/>
        <FormContainer onChange={this.selectDate} date={this.state.selectedDate}/>
      </div>
    );
  }
}

export default App;


