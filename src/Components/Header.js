import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";






class Header extends React.Component{


      handleLogout = () => {
      localStorage.removeItem("keyToken");
      localStorage.removeItem("keyRole");
      localStorage.removeItem("expireTime");
    };

    hasRole = (requestRole) => {
      let currentRoles = JSON.parse(localStorage.getItem("keyRole"));

      if (currentRoles === null) return false;


      for (let currentRole of currentRoles) {
        if (currentRole === requestRole) return true;
      }
      return false;
    };

    IsLogedIn = () => {
      let currentRoles = JSON.parse(localStorage.getItem("keyRole"));

      if (currentRoles === null) return false;

      
      return true;
    };

    render(){
      
      
        
    
    
          return(
                  
              

                <div id="header">

          


                <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
                <Link to="/">
                <ReactBootStrap.Navbar.Brand  style={{fontSize : "35px"}}>Health clinic</ReactBootStrap.Navbar.Brand>
                </Link>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <ReactBootStrap.Navbar.Collapse  id="responsive-navbar-nav">
              
                <ReactBootStrap.Nav className="ml-auto" >
            
            
            
                <Link to="/drugs">
                <ReactBootStrap.Nav.Link href="#deets">Drugs</ReactBootStrap.Nav.Link>
                </Link>

                <Link to="/pharmacies">
                <ReactBootStrap.Nav.Link href="#deets">Pharmacies</ReactBootStrap.Nav.Link>
                </Link>
            
                <ReactBootStrap.NavDropdown alignRight title="Apointment" id="collasible-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="/pharmacistApointment">Pharmacist</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="/dermatologistApointment">Dermatologist</ReactBootStrap.NavDropdown.Item>
                    
                </ReactBootStrap.NavDropdown>

                <ReactBootStrap.NavDropdown alignRight title="Register" id="collasible-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="/registerStaff" >Stuff member</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item >Pharmacy</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item >Drug</ReactBootStrap.NavDropdown.Item>
                    
                    
                </ReactBootStrap.NavDropdown>

                  
                <ReactBootStrap.NavDropdown alignRight title="User" id="collasible-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="/login" hidden={this.IsLogedIn()}>Login</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="/registration" hidden={this.IsLogedIn()}>Register</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider hidden={!this.hasRole("*")} />
                    <ReactBootStrap.NavDropdown.Item href="/profile" hidden={!this.hasRole("*")}>My profile</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item onClick={this.handleLogout} href="/login" hidden={!this.IsLogedIn()}>Logout</ReactBootStrap.NavDropdown.Item>
                    
                </ReactBootStrap.NavDropdown>
            
            
                </ReactBootStrap.Nav>
            
              </ReactBootStrap.Navbar.Collapse>
            
            </ReactBootStrap.Navbar>
            
            
                    </div>



              )
    }


}

export default Header;