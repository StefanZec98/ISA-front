import logo from './logo.svg';
import './App.css';
import HomePage from "./Components/HomePage"
import Drugs from "./Components/Drugs"
import Pharmacies from "./Components/Pharmacies"
import Login from "./Components/Login"
import UserService from "./services/UserService"
import RegisterPage from "./Components/RegistrationPage"

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
        <Route  to ="/pharmacies" path ="/pharmacies"  component={Pharmacies}/>
        <Route  to ="/login" path ="/login"  component={Login}/>
        <Route  to ="/registration" path ="/registration"  component={RegisterPage}/>
        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
