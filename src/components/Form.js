import React from 'react';
// import Validation from 'react-validation';
import FormHeader from './FormHeader';
// import dateFns from 'date-fns';

class Form extends React.Component{
    state = {
        date: "",
        time: "",
        location: "",
        desc: "",
        show: false
    }

    handleFormChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleFormShow = e => {
        this.setState({show: true})
    }

    handleFormSubmit = e => {
        e.preventDefault();
        // const newPost = {
        //     id: this.props.posts.posts.posts.length + 1,
        //     date: this.props.date,
        //     time: this.state.time,
        //     location: this.state.location,
        //     desc: this.state.desc,
        //     userId: 1
        // }
        const id = this.props.posts.posts.posts.length + 1;
        const date = this.props.date;
        const time = this.state.time;
        const location = this.state.location;
        const description = this.state.desc;
        const userId = 1;
      
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ id, date, time, location, description, userId })
        }
        fetch('http://localhost:3000/api/calendar', options).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        this.props.loadPosts()
        // this.props.createPost(newPost)
    }

    renderForm(){
        return (
            <form id="form" onSubmit={this.handleFormSubmit}>
                    <label>
                        Date:
                        <input className="formInput" type="text" name="date" value={this.props.date} onChange={this.handleFormChange} placeholder={new Date()}/>
                    </label>
                    <label>
                        Time:
                        <input className="formInput" type="text" name="time" onChange={this.handleFormChange}/>
                    </label>
                    <label>
                        Location:
                        <input className="formInput" type="text" name="location" onChange={this.handleFormChange}/>
                    </label>
                    <label>
                        Description:
                        <input className="formInput" type="text" name="desc" onChange={this.handleFormChange} />
                    </label>
                    <button id="formSubmit" type="submit" value="Submit"/>
                </form>
        )
    }
    render(){
        return (
            <div id="formContainer">
                <FormHeader/>
                <button id="createButton" onClick={this.handleFormShow}> + </button>
                {this.state.show ? this.renderForm() : <div></div>}
            </div>
        )
    }
}

export default Form;