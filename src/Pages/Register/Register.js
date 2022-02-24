import React, { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; 
import Navigation from "../../Components/Home/Navigation/Navigation";
import useAuth from "../../Components/hooks/useAuth";
import registerImage from "./register-2.jpg";

const loginButton = {
  type:'button',
  display:'block',
  padding:'8px 35px',
  border:'none',
  color:'#fff',
  fontSize:'18px',
  fontWeight:'500',
  borderRadius:'5px',
  backgroundColor:'#137F7F'
}

const inputStyle = {
  border: '2px solid #ddd',
  backgroundColor:'#fff',
  boxShadow: '0 3px 10px #ddd',
  padding:'10px 10px'

}

const terms = {
  fontSize: '11px'
}

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, registerUser, authError, isLoading} = useAuth();
    console.log(user)
    const navigate = useNavigate();


   // handleOnChange
  const handleOnChange =(e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  }

    // handleRegisterSubmit
    const handleRegisterSubmit = (e) => {
      
      if(loginData.password !== loginData.password2){
        alert('Your Password did not match');
        return;
      }
      
      registerUser(loginData.email, loginData.password)
      
      e.preventDefault();
    }

  return (
    <div> 
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="login-img">
              <img
                src={registerImage}
                className="img-fluid mt-5"
                alt="Login Image bg"
              />
            </div> 
          </div>
          <div className="col-lg-6">
            {authError && <Alert variant="danger mt-3">{authError}</Alert>}
            {user?.email &&  <h4 className="bg-success text-light p-3 mt-2">User create successfully</h4> }
            {!isLoading && <form onSubmit={handleRegisterSubmit} className="w-75 mx-auto p-4 shadow mt-3 rounded-3 mb-5">
              <h3 className='my-4 fs-5'>Sign Up</h3>
              <input
                type="text"
                style={inputStyle}
                name="displayName"
                onChange={handleOnChange}
                placeholder="Your Name"
                className="form-control mb-3"
              />
              <input
                type="email"
                name="email"
                onChange={handleOnChange}
                style={inputStyle}
                placeholder="Your Email"
                className="form-control mb-3"
              />
              <input
                type="password"
                name="password"
                onChange={handleOnChange}
                style={inputStyle}
                placeholder="Your Password"
                className="form-control mb-3"
              />
              <input
                type="password"
                name="password2"
                onChange={handleOnChange}
                style={inputStyle}
                placeholder="Your Confirm Password"
                className="form-control mb-3"
              />
              <button style={loginButton} className="btn btn-primary" type="submit">
                Sign Up
              </button>
              
              <div className="my-3">
                <p>Already have an Account? <Link to='/login'>Sign In</Link> </p>
              </div>
              <div>
                <span style={terms}>By signing up, you agree to our <a href="">Terms of Use</a>  and <a href="">Privacy Policy</a> .</span>
              </div>
            </form> }
            {isLoading && 
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>}
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
