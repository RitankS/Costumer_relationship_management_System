import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png"

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <>
            <nav className="navbar navbar-light bg-dark index">
                <div className="container d-flex justify-content-between align-items-center">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="" width="60" height="50" />
                    </NavLink>
                    <NavLink className="btn btn-primary" to="/home">Home</NavLink>
                </div>
            </nav>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center mb-4">Create an Account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="formFullName">Full Name</label>
                                <input type="text" className="form-control" id="formFullName" placeholder="Enter your full name" required />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="formMobile">Mobile Number</label>
                                <input type="tel" className="form-control" id="formMobile" placeholder="Enter your mobile number" required />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="formEmail">Email</label>
                                <input type="email" className="form-control" id="formEmail" placeholder="Enter your email" required />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="formPassword">Password</label>
                                <input type="password" className="form-control" id="formPassword" placeholder="Enter password" required />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="formNewPassword">New Password</label>
                                <input type="password" className="form-control" id="formNewPassword" placeholder="Enter new password" required />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="formBusinessType">Business Type</label>
                                <select className="form-control" id="formBusinessType">
                                    <option>Choose...</option>
                                    <option>Fitness & Gym</option>
                                    <option>Banking Services</option>
                                    <option>Food Services</option>
                                    <option>IT Management</option>
                                    <option>Real-Estate</option>
                                    <option>Hospital & Medical Services</option>
                                    <option>Educational Institutions</option>
                                    <option>Hospitality Services</option>
                                </select>
                            </div>
                            <br></br>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="formCheckbox" required />
                                <label className="form-check-label" htmlFor="formCheckbox">I accept the terms and conditions</label>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </form>
                        <p className="text-center mt-3">Already have an account? <NavLink to="/login">Login</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Login;