import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import Navigation from "../../Components/Home/Navigation/Navigation";
import useAuth from "../../Components/hooks/useAuth"; 
import loginImage from "./login-2.jpg";
import './Login.css' 


const loginButton = {
  type:'button',
  display:'block',
  padding:'8px 35px',
  border:'none',
  color:'#fff',
  fontSize:'18px',
  fontWeight:'500',
  borderRadius:'5px',
  backgroundColor:'#FF735C'
}

const inputStyle = {
  display:'inline-block',
  backgroundColor:'#fff',
  boxShadow: '0 3px 10px #ddd',
  padding:'10px 10px'

} 
 

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {user, loginUser, signInUsingGoogle, setUser,isLoading, setIsLoading, authError, savedUser, setAuthError} = useAuth();
  
  // redirect history for returning from log in page to where user came
  const navigate = useNavigate();
  const location = useLocation();

  // Google sign in 
  const handleGoogleLogin = () => {
    setIsLoading(true)
    signInUsingGoogle(location,navigate)
      .then(result => {
        const user = result?.user
        savedUser(user?.email, user?.displayName, 'PUT')
        setUser(user)
        const destination = location?.state?.from || '/dashboard';
        navigate(destination);
       }).catch(error => {
        setAuthError(error.message)
       })
       .finally(() => setIsLoading(false))
  }
  // handleOnChange
  const handleOnChange =(e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  }
  // handleSubmit
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
     
    console.log(loginData.email)
    e.preventDefault();
  }

  return (
    <div> 
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <div className="login-img">
              <img 
                src={loginImage}
                className="img-fluid"
                alt="Login Image bg"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-3 pb-5">
              {authError && <Alert variant="danger mt-3">{authError}</Alert>}
              {user?.email &&  <p className="bg-success text-light p-2 mt-2">Login successfully</p> }
              {isLoading &&  
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>}
            <form onSubmit={handleLoginSubmit} className="w-75 mx-auto p-4 shadow mt-5 rounded-3">
              <h3 className='my-4 fs-5'>Login to your Account </h3>  
              <input
                type="email"
                name='email'
                onBlur={handleOnChange}
                style={inputStyle}
                required
                placeholder="Your Email"
                className="form-control mb-3"
              /> 
              <input
                type="password"
                name="password"
                onBlur={handleOnChange}
                style={inputStyle}
                placeholder="Your Password"
                className="form-control mb-3"
              />
              <div className="d-flex justify-content-between align-items-center my-3"> 
                <div>
                  <input type="checkbox" /> Remember me
                </div>
                <div>
                   <a href="#">Forgot Password</a>
                </div> 
               </div>
              <button type="submit" className="login-button" style={loginButton} >
                Login
              </button>
              {/* google login */}
              <p>----------OR---------</p>
              <button onClick={handleGoogleLogin} type='submit' className="btn btn-primary">Google SignIn</button>
              
              <div className="my-3">
                <p>Don't have an account? <Link to='/register'>Sign up</Link> </p>
              </div> 
            </form>
             
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Login;
