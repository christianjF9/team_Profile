 const inquirer = require('inquirer');
class Employee{
    constructor(type){
        this.name;
        this.id;
        this.email;
        this.promise = this.promptEmployee(type).then(answers=>{
            this.name = answers.name;
            this.id = answers.id;
            this.email = answers.email;
        });
    }
    getName(){

    }
    getId(){

    }
    getEmail(){

    }
    getRole(){
        return 'Employee';
    }

    promptEmployee = type =>{
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the ${type}'s name`,
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log(`Please enter the ${type}'s name!`);
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'id',
                message: `What is the ${type}'s employee ID`,
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log(`Please enter the ${type}'s employee ID!`);
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'email',
                message: `What is the ${type}'s email address`,
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log(`Please enter the ${type}'s email address!`);
                    return false;
                  }
                }
              },
        ]);
    }
}


module.exports = Employee;