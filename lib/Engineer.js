const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(github = "", name = "", id = "", email = "") {
        super(name, id, email)

        this.github = github;
    }

    getGithub() {
        return `https://github.com/${this.github}/`
    }

    getRole() {
        return 'Role: Engineer'
    }
}

module.exports = Engineer;