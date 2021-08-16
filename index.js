const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const util = require('util');

const Engineer = require('./lib/Engineer');
function init (){
    console.log('app initiated...');
    initHtml();
    addEmployee();
};
const employees = [];

function addEmployee() {
    inquirer.prompt([{
        message: "Enter new employee's name...",
        name: 'name'
    },
    {
        type: "list",
        message: "Select employee's job role...",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: 'role'
    },
    {
        message: "Enter employee's email..."
        name: email;
    },
    {
        type: "list"
    }
    ]);
};


function initHtml() {
    console.log('html initiated...');
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <title>Team Member Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class = "navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row"></div>
        </div>
    </body>
    </html>`;
    fs.writeFile('./src/output.html', html, (err)=>{
        if (err) {
            console.log(err);
        }
    });
};

init();