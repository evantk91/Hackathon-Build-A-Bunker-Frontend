import React, { Component } from 'react'

class UserSignup extends Component {

    state = {
        username: "",
        email: ""
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        console.log(this.state)

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state) 
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="signup-form">
                <h2>Sign Up Here!</h2>
                <label>Username</label>
                <input name="username" value={this.state.title} onChange={this.handleChange} />
                <label>Email</label>
                <input name="email" value={this.state.email} onChange={this.handleChange} />
                <input type="submit"/>
            </form>
        )
    }
}

export default UserSignup