import API from "../../utils/API";
class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        let usercheck = {
            email: "pavani.vithala@gmail.com",
            password: "Manu"
        }
        API.loginUser(usercheck)
        .then(res => {
            if (res.data.status === "error") {
                alert("Check your user credentials");
                this.authenticated = false;
                throw new Error(res.data.message);
            }else{
                console.log("user Exists and login Successful");
           // this.setState({ auth: true, currentUser: res.data._id })
            this.authenticated = true;
            }
            
        })
        .then(() => {
            //let currUser = this.state.currentUser;
            console.log("authenticated is  ", +this.authenticated);
            

        })
        .catch(err => console.log(err)); 
        
       // cb();
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