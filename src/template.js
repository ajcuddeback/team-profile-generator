const { default: generate } = require("@babel/generator");
const { Console } = require("console");

const user = empData => {
    if (empData.officeNumber) {
        return empData.officeNumber
    }
    if (empData.school) {
        return empData.school
    }
    if (empData.github) {
        return empData.github
    }
};

const generateCards = templateData => {
    return `
    <body>
    ${templateData.map((emp) => {
        return `
        <div>
            <h1>${emp.getName()}</h1>
            <h2>${emp.getRole()}
            <p>${emp.getId()}</p>
            <p>${emp.getEmail()}</p>
            <p>${user(emp)}</p>
        </div>
    `
    }).join('')}
    </body>`
}




module.exports = templateData => {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profiles</title>
         <link rel="stylesheet" href="style.css">
        </head>   
            ${generateCards(templateData)}                   
        </html>
        `
};
