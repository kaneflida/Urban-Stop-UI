const { default: user } = require("../Components/user");

class User {
    constructor(userId,picture, username) {
        this.userId= userId
        this.picture = picture;
        this.username = username;
    }
}

export default User;
