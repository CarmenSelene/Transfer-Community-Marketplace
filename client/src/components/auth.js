class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
// auth goes here
        this.authenticated = true;
        cb();
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