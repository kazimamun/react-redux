import React, { Component } from 'react';

class ClassForm extends Component {
    state = {
            name : '',
            email: '',
            password: '',
            bio: ''
    };
    handleChange= e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit= e =>{
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Enter Your Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Your Name"
                        name="name" id="name" 
                        onChange={this.handleChange} 
                        value={this.state.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter Your Valid Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter Your Email"
                        name="email" id="email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter a valid Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter valid password"
                        name="password" id="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Bio">Enter a short Bio</label>
                    <textarea 
                        type="text" 
                        className="form-control" 
                        placeholder="what's on your mind"
                        name="bio" id="bio" 
                        value={this.state.bio} 
                        onChange={this.handleChange}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Submit"/>
            </form>
        );
    }
}

export default ClassForm;