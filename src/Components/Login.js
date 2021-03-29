import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Header from './Header';
import UserService from "../services/UserService";



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username : '',
                  password : ''
    
                };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePassworndHandler = this.changePassworndHandler.bind(this);
  }

  handleSubmit(event) {
    
    event.preventDefault();

    

    UserService.logIn(this.state.username,this.state.password).then(
    () => {
        
        this.props.push("/drugs");
        window.location.reload();
    }


    );




  }

  componentDidMount() {
    
  }

  changeUsernameHandler(event) {
    this.setState({username: event.target.username});
  }

  changePassworndHandler(event) {
    this.setState({password: event.target.password});
  }


  render() {
    return (
      <div>
      
      <Header/>
     
      <br></br>
      <br></br>
      <div class="container col-md-4 col-md-offset-4 center_div">
        <form >
            <div class="form-group">
              <label for="exampleInputUsername">Username</label>
              <input type="username" value={this.state.username} onChange={this.changeUsernameHandler} class="form-control" id="exampleInputUsername" aria-describedby="usernameHelp"></input>
              <small id="usernameHelp" class="form-text text-muted" >Unique username.</small>
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" value={this.state.password} onChange={this.changePassworndHandler} class="form-control" id="exampleInputPassword1"></input>
            </div>

            <br></br>

            <button type="submit" class="btn btn-primary">Login</button>
        </form>
        
      </div>

      </div>
    );
  }


}
  
  export default Login;