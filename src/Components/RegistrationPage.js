import React, { Component } from "react";
import Header from './Header';

class RegisterPage extends Component {



    render() {
        return(

        <React.Fragment>
            <Header/>  

            <h5 className=" text-center  mb-0 text-uppercase" style={{ marginTop: "2rem" }}>
						Registration
					</h5>

            <br/>        

            <div class="container" style={{maxWidth: "40%"}}>
                <form>
                    <div class="form-group">
                        <label style={{textAlign:"start !important"}} for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Email address"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Surname</label>
                        <input type="text" class="form-control" id="surname" placeholder="Surname"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="Address"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Phone number</label>
                        <input type="text" class="form-control" id="phoneNumber" placeholder="Phone number"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="Password" class="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Repeat password</label>
                        <input type="Password" class="form-control" id="passwordRepeat" placeholder="Repeat password"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" style={{width: "20%"}}>Submit</button>
                </form>
            </div>  

        </React.Fragment>



        );


    }


}

export default RegisterPage;