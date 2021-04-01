import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Header from './Header';
import TopBar from './TopBar';
import { Link } from "react-router-dom";



function HomePage() {
    return (
     
      <React.Fragment>
     
          <Header/>
          <div >

          
          
          
          
          
          <section id="homePageSection" className="d-flex ">
					<div className="container" style={{textAlign: "center"}}>
						<h1>Welcome to Health Clinic </h1>

            <Link  to="/login" className="btn-Login-Register">
							Login
						</Link>

						<Link  to="/registration" className="btn-Login-Register">
							Register
						</Link>
      
					</div>
				
				  </section>

             
        
          </div>
          
       
      </React.Fragment>
    );
  }
  
  export default HomePage;