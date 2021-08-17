const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

function init (){
    console.log('app initiated...');
    initHtml();
    addEmployee();
};
const employees = [];

//* Gets employee information from user
function addEmployee() {
    inquirer.prompt([{
        message: "Enter new employee's name...",
        name: 'name'
    },
    {
        message: "Enter employee's ID#...",
        name: 'id'
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
        message: "Enter employee's email...",
        name: 'email'
    }])
    .then(({name, role, id, email}) => {
        let roleInfo = "";

        if (role === "Engineer") {
            roleInfo = "gitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office-phone";
        }
        inquirer.prompt([{
            message:`Enter ${role}'s ${roleInfo}...`,
            name: 'roleInfo'
        },
        {
            type: "list",
            message: "Add additional employee...",
            choices: [
                "yes",
                "no"
            ],
            name: "anotherEmployee"
        }])
        .then(({roleInfo, anotherEmployee}) => {
            let newEmployee;
            if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, roleInfo);
            }else if (role === "Intern"){
                newEmployee = new Intern (name, id, email, roleInfo);
            }else {
                newEmployee = new Manager (name, id, email, roleInfo);
            }
            employees.push(newEmployee)
            addHtml(newEmployee);
              if (anotherEmployee === "yes") {
                  addEmployee();
              };
            // console.info(employees);
        });
    });

};

//* Initial html text for page src/output.html
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
}

//* Add new employee information to src/output.html
function addHtml(member) {
    console.log("we in here");
    return new Promise((resolve, reject)=>{
      const name = member.getName();
      const role = member.getRole();
      const id = member.getId();
      const email = member.getEmail()

      let data = "";
      if (role === 'Engineer'){
        const github = member.getGithub();
        data = `<div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="card-header">${name}<br /><br />Engineer</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email Address: ${email}</li>
              <li class="list-group-item">GitHub: ${github}</li>
          </ul>
          </div>
        </div>`;
      } else if (role === 'Intern') {
        const school = member.getSchool();
        data = `<div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="card-header">${name}<br /><br />Intern</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email Address: ${email}</li>
              <li class="list-group-item">School: ${school}</li>
          </ul>
          </div>
        </div>`;
      } else {
        const officeNumber = member.getOfficeNumber();
        data = `<div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="card-header">${name}<br /><br />Manager</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email Address: ${email}</li>
              <li class="list-group-item">Office Phone: ${officeNumber}</li>
          </ul>
          </div>
        </div>`;
      }
      console.log(`adding ${name}`);
      fs.appendFile('./src/output.html', data, (err) => {
        if (err) {
            return reject(err);
        };
        return resolve();
      });
    });
}

init();