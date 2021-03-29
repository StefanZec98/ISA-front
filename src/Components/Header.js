import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";



const Header = () => {
    return(
      <div>

  


    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
    <Link to="/">
    <ReactBootStrap.Navbar.Brand  style={{fontSize : "30px"}}>Health clinic</ReactBootStrap.Navbar.Brand>
    </Link>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    
    <ReactBootStrap.Navbar.Collapse  id="responsive-navbar-nav">
   
    <ReactBootStrap.Nav className="ml-auto" >



    <Link to="/drugs">
    <ReactBootStrap.Nav.Link href="#deets">Drugs</ReactBootStrap.Nav.Link>
    </Link>

    <ReactBootStrap.NavDropdown alignRight title="Apointment" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/pharmacistApointment">Pharmacist</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/dermatologistApointment">Dermatologist</ReactBootStrap.NavDropdown.Item>
        
    </ReactBootStrap.NavDropdown>
      
    <ReactBootStrap.NavDropdown alignRight title="User" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/login">Login</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/register">Register</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/profile">My profile</ReactBootStrap.NavDropdown.Item>
        
    </ReactBootStrap.NavDropdown>


    </ReactBootStrap.Nav>

  </ReactBootStrap.Navbar.Collapse>

</ReactBootStrap.Navbar>


        </div>
        
    )
}

export default Header;