import React from 'react';
import FormHeader from './FormHeader';

class Form extends React.Component{
    state = {
        userId: "",
        date: "",
        time: "",
        location: "",
        desc: "",
        show: false
    }
    handleDateChange = e => {
        // console.log("props:", this.props)
        this.setState({date: this.props.date})
    }
    handleFormShow = e => {
        this.setState({show: true})
    }
    renderForm(){
        return (
            <form id="form">
                    <label>
                        Date:
                        <input className="formInput" type="text" name="date" placeholder={this.state.selectedDate} onClick={this.handleDateChange}/>
                    </label>
                    <label>
                        Time:
                        <input className="formInput" type="text" name="time" />
                    </label>
                    <label>
                        Location:
                        <input className="formInput" type="text" name="location" />
                    </label>
                    <label>
                        Description:
                        <input className="formInput" type="text" name="desc" />
                    </label>
                    <input id="formSubmit" type="submit" value="Submit" />
                </form>
        )
    }
    render(){
        // console.log("form props:", this.props)
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