// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// links to html page
const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// team array
const teamArr = [];

// start of manager prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Manager's ID",
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log("Please enter the Manager's ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's email",
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log("Please enter an email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Manager's office number",
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log("Please enter an office number.");
                    return false;
                } else {
                    return true;
                }
            }
        },
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArr.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    =============================
    Adding employees to the team
    =============================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please enter employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log("Please enter employee's ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log("Please enter employee's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter employee's GitHub username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's school name.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add additional team members?",
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role ==="Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArr.push(employee);
        if(confirmAddEmployee) {
            return addEmployee(teamArr);
        } else {
            return teamArr;
        }
    })
};

// function to generateHTML page using file system

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
            // when profile has been created
        } else {
            console.log("Your team profile has been successfully creatd!")
        }
    })
};

addManager()
.then(addEmployee)
.then(teamArr => {
    return generateHTML(teamArr);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});

