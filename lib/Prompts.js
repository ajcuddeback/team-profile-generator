const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Prompts {
    constructor() {
        this.manager;
        this.id;
        this.email;
        this.officeNumber;
        this.github;
        this.school;
        this.employees = [];
    }

    promptUser() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: 'What is your managers name?'
                },
                {
                    type: 'text',
                    name: 'id',
                    message: 'What is your managers id?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is your managers email?'
                },
                {
                    type: 'text',
                    name: 'officeNumber',
                    message: 'What is your managers office number?'
                }
            ])
            //destructure name from the prompt object
            .then(({ name, id, email, officeNumber }) => {
                this.employees.push(new Manager(name, id, email, officeNumber));

                console.log(this.employees)
            })
    }
}

module.exports = Prompts;