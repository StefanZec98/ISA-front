import logo from './logo.svg';
import './App.css';
import HomePage from "./Components/HomePage"
import Drugs from "./Components/Drugs"
import Login from "./Components/Login"
import UserService from "./services/UserService"

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
        <Route  to ="/login" path ="/login"  component={Login}/>
        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
