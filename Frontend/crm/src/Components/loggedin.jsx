import React , {useState} from 'react';
import "./indexpage.css"
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const takeCredential =(e)=>{
    setEmail(e.target.value)
    setPassword(e.target.value)
  }
  console.log(email)
  console.log(password)
  const payload={
    email , 
    password
  }
  console.log(payload)
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:2102/crm/business', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
      });
      if (response.ok) {
          // Login successful
          const data = await response.json();
          console.log('Login successful:', data);
          // Perform actions upon successful login
      }
      else {
        // Handle login failure
        console.error('Login failed');
    }
} catch (error) {
    console.error('Error:', error);
}
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
    
    <div className="container py-5 login">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="formIdentifier">Email or Mobile Number</label>
              <br></br>
              <input type="text" className="form-control" id="formIdentifier" placeholder="Enter email or mobile number" required onChange={takeCredential}/>
            </div>

            <div className="form-group">
              <label htmlFor="formPassword">Password</label>
              <input type="password" className="form-control" id="formPassword" placeholder="Enter password" required onChange={takeCredential}/>
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>

          <p className="text-center mt-3">New user? <NavLink to='/signin'>Sign up</NavLink></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;