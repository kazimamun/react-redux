import React, { Component } from 'react';

class ClassForm2 extends Component {
    state = {
        formData: {
            name: '',
            email: '',
            password: '',
            bio: '',
            country: '',
            gender: '',
            skills: []
        }
    };
    handleChange = e => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state.formData);
        this.setState({
            formData: {
                name: '',
                email: '',
                password: '',
                bio: ''
            }
        })
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
                        value={this.state.formData.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter Your Valid Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Email"
                        name="email" id="email"
                        value={this.state.formData.email}
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
                        value={this.state.formData.password}
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
                        value={this.state.formData.bio}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Select Your Country: </label>
                    <select 
                        onChange={this.handleChange} 
                        className="form-control" 
                        id="country" name="country"
                    >
                        <option selected>Select Your Country</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="india">India</option>
                        <option value="america">America</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input 
                            type="radio" 
                            name="gender" 
                            id="male" 
                            value="male" 
                            onChange={this.handleChange}
                        />
                        <label htmlFor="gender">Male</label>
                    </div>
                    <div className="form-check">
                        <input 
                            type="radio" 
                            name="gender" 
                            id="female" 
                            value="female" 
                            onChange={this.handleChange}
                        />
                        <label htmlFor="gender">Female</label>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
        );
    }
}

export default ClassForm2;