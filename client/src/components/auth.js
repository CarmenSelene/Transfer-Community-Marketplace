import API from "../utils/API";

class Auth {
    constructor() {
        this.authenticated = false;
    }

    login({email, password}) {
        let usercheck = {
            email: email,
            password: password
        }
        API.loginUser(usercheck)
            .then(res => {
                console.log(res.data);
                if (res.data === null) {
                    alert("Check your user credentials");
                    this.authenticated = false;
                    console.log("authenticated is  ", + this.authenticated);
                } else {
                    console.log("user Exists and login Successful");
                    this.authenticated = true;
                    console.log("authenticated is  ", + this.authenticated);
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