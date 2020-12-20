const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const { exportDefaultSpecifier } = require("@babel/types");
const { writeFile } = require("fs");

class Prompts {
    constructor() {
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

                this.addEmployee();
            })
    }

    addEmployee() {
        inquirer
            .prompt({
                type: 'list',
                name: 'confirmAddEmp',
                message: 'Would you like to add an Engineer, add a Intern, or are you finished adding employees?',
                choices: ['Add Engineer', 'Add Intern', 'I am finished adding employees']
            })
            .then((data) => {
                if (data.confirmAddEmp === 'Add Engineer') {
                    this.addEngineer();
                } else if (data.confirmAddEmp === 'Add Intern') {
                    this.addIntern();
                } else {
                    this.writeFile();
                }
            })
    }

    addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: 'What is your engineers name?'
                },
                {
                    type: 'text',
                    name: 'id',
                    message: 'What is your engineers id?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is your engineers email?'
                },
                {
                    type: 'text',
                    name: 'github',
                    message: 'What is your engineers github username?'
                }
            ])
            .then(({ name, id, email, github }) => {
                this.employees.push(new Engineer(name, id, email, github));

                this.addEmployee();
            })
    }
    addIntern() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: 'What is your interns name?'
                },
                {
                    type: 'text',
                    name: 'id',
                    message: 'What is your interns id?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is your interns email?'
                },
                {
                    type: 'text',
                    name: 'school',
                    message: 'What is your interns school?'
                }
            ])
            .then(({ name, id, email, school }) => {
                this.employees.push(new Intern(name, id, email, school));

                this.addEmployee();
            })
    }

    writeFile() {
        console.log('we gonna write da file baby!')
        console.log(this.employees)
    }


}

module.exports = Prompts;