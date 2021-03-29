import axios from "axios";

const API_URL="http://localhost:8080/";

class UserService{

    logIn(username,password){

        return axios
            .post(API_URL + "login", {
               username,
               password
    
    
            });
    
    }




}
export default UserService;