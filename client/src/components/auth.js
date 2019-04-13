import API from "../utils/API";
//import { isNull } from "util";
class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        let usercheck = {
            email: 'pavani.vithala@gmail.com',
            password: 'Manu'
        }
        API.loginUser(usercheck)
        .then(res => {
            console.log(res.data);
            if (res.data === null) {
                alert("Check your user credentials");
                this.authenticated = false;
                console.log("authenticated is  ", +this.authenticated);
               
            }else{
             console.log("user Exists and login Successful");
           // this.setState({ auth: true, currentUser: res.data._id })
           this.authenticated = true;
           console.log("authenticated is  ", +this.authenticated);
            }
        }).catch(err => console.log(err));
        
            
            
            
            

        
         
        
      
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAthenticated() {
        return this.authenticated;
    }
}

export default new Auth();