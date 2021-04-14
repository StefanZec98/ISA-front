import Header from './Header';
import React, { Component } from "react";

class LoginPage extends Component {

    state = {
        email: "",
		password: "",
        



    };

    handleEmailChange = (event) => {
		this.setState({ email: event.target.value });
	};
    handlePasswordChange = (event) => {
		this.setState({ password: event.target.value });
	};

    render() {
        return(
            <React.Fragment>
                <Header/> 

                <h5 className=" text-center  mb-0 text-uppercase" style={{ marginTop: "2rem" }}>
						Login to Health Clinic
				</h5>

               <br/>  

               <div class="container" style={{maxWidth: "40%"}}>
                <form>
                    <div class="form-group">
                        <label style={{textAlign:"start !important"}} for="exampleInputEmail1">Email address</label>
                        <input type="text" onChange={this.handleEmailChange} value={this.state.email} class="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Email address"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="Password" onChange={this.handleNameChange} value={this.state.name} class="form-control" id="password" placeholder="Password"/>
                    </div>
                    
                    
                    <div class="text-center">
                    <button type="button" class="btn btn-primary " style={{width: "20%"}}>Submit</button>
                    </div>

                </form>
            </div>   





            </React.Fragment>
        );
    }
}
export default LoginPage;