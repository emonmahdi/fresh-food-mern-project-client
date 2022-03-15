import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const profileImg = {
  height: '40px',
  width: '40px',
  borderRadius: '50%' 
}

const Navigation = () => {
  const {user, logOut} = useAuth();  
  return (
    <div>
      <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/home">Fresh Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto"> 
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/allproducts">All Foods</Nav.Link>
              {
                user?.email ? (
                   <>     
                    <Nav.Link> 
                       <Link to='/dashboard' className='text-decoration-none text-light'>Dashboard</Link>
                    </Nav.Link>
                    {/* <NavLink  to='/dashboard'>Dashboard</NavLink> */}
                  </>
                ):(
                  <span></span>
                )
              }
               
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>       
              </NavDropdown>  
              {user?.email ? (  
                <span className="mx-3">
                  
                  <span><img src={user?.photoURL} style={profileImg} alt="" /> </span>
                  <span className="text-light px-1 fw-bold">{user?.displayName}</span>
                  <button onClick={logOut} className="btn btn-primary ms-3">Log Out</button>
                </span> 
              ) : (
                <> 
                  <Button className='btn btn-danger'>
                      <Link className="text-light text-decoration-none" to='/login'>Login</Link>
                  </Button>
              </>
              )
              }   
              
            </Nav> 
          </Navbar.Collapse>  
        </Container>  
      </Navbar>
    </div>
  ); 
};

export default Navigation;
