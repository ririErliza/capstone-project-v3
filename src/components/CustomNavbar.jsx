import React, { useState } from 'react';
import {Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../img/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom'



function CustomNavbar() {
  const user = localStorage.getItem("token")
  const location = useLocation()
  const [expanded, setExpanded] = useState(false);

  const Navigate = useNavigate()

  const handleLogout =()=>{
    localStorage.removeItem("token");
    Navigate("/login")
  }
  return (
    <section id="nav-bar">
    <Navbar expanded={expanded} collapseOnSelect expand="lg" className="Navbar navbar-dark">
  <Navbar.Brand>
    <Link to="/">
  <img
        src={logo}
        width="120"
        height="50"
        className="d-inline-block align-top ml-3"
        alt="reviver logo"
      />
      </Link>
  </Navbar.Brand>
  <Navbar.Toggle  onClick={() => setExpanded(expanded? false : "expanded")} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  id="responsive-navbar-nav">
    <Nav className="ml-auto">

    <Link onClick={() => setExpanded(false)}
               to="/" className='text-white mr-4 '> <div className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }> HOME </div>  </Link>
    <Link onClick={() => setExpanded(false)}
               to="/aboutUs" className='text-white mr-4 '> <div className={
                location.pathname === '/aboutUs' ? 'nav-link active' : 'nav-link'
              }> ABOUT US </div> </Link>

    <Link onClick={() => setExpanded(false)}
              to="/contactus" className='text-white mr-4 '> <div className={
                location.pathname === '/contactus' ? 'nav-link active' : 'nav-link'
              } > CONTACT US </div> </Link>



    <Link onClick={() => setExpanded(false)}
              to="/shop" className='text-white mr-4 '> <div className={
                location.pathname === '/shop' ? 'nav-link active' : 'nav-link'
              }> SHOP </div>  </Link>

{user?(
  <Button onClick={handleLogout}
               id="button-logout" >  LOGOUT  </Button>
    ) : (
                <Link onClick={() => setExpanded(false)}
                to="/login" className='text-white mr-4 '> <div className={
                  location.pathname === '/login' ? 'nav-link active' : 'nav-link'
                }> LOGIN </div>  </Link>          

)}

              

    
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
</section>
  )
}

export default CustomNavbar