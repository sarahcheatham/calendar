import React from 'react';

class Form extends React.Component{
    state = {
        userId: "",
        date: "",
        time: "",
        location: "",
        desc: ""
    }
    render(){
        return (
            <form id="form">
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form;