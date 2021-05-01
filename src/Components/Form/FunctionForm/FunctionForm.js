import React, { useState } from 'react';

const FunctionForm = () => {
    const [formData, setFormData] = useState({
        name : '',
        email: '',
        password: '',
        bio: ''
    });
    const handleChange=e=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit= e =>{
        e.preventDefault();

        console.log(formData);
        setFormData({
            name : '',
            email: '',
            password: '',
            bio: ''
        })
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Enter Your Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Your Name"
                        name="name" id="name" 
                        onChange={handleChange} 
                        value={formData.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter Your Valid Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter Your Email"
                        name="email" id="email" 
                        value={formData.email} 
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter a valid Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter valid password"
                        name="password" id="password" 
                        value={formData.password} 
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Bio">Enter a short Bio</label>
                    <textarea 
                        type="text" 
                        className="form-control" 
                        placeholder="what's on your mind"
                        name="bio" id="bio" 
                        value={formData.bio} 
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Submit"/>
            </form>
        </div>
    );
};

export default FunctionForm;