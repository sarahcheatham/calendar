import React from 'react';
// import Validation from 'react-validation';
import FormHeader from './FormHeader';
import dateFns from 'date-fns';

class Form extends React.Component{
    state = {
        userId: "",
        // date: "",
        date: new Date(),
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
        const data = {
            date: this.props.date,
            time: this.state.time,
            location: this.state.location,
            desc: this.state.desc
        }
    }

    renderForm(){
        return (
            <form id="form" onSubmit={this.handleFormSubmit}>
                    <label>
                        Date:
                        <input className="formInput" type="text" name="date" value={this.props.date}/>
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
                    <input id="formSubmit" type="submit" value="Submit" />
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