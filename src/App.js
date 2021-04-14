import logo from './logo.svg';
import './App.css';
import HomePage from "./Components/HomePage"
import Drugs from "./Components/Drugs"
import Login from "./Components/Login"
import UserService from "./services/UserService"
import RegisterPage from "./Components/RegistrationPage"
import LoginPage from "./Components/LoginPage"

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
    
    <Router>
      
        <Switch>
        <Route exact to ="/"  path ="/" component={HomePage}/>
        <Route  to ="/drugs" path ="/drugs"  component={Drugs}/>
        <Route  to ="/registration" path ="/registration"  component={RegisterPage}/>
        <Route  to ="/login" path ="/login"  component={LoginPage}/>
        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
