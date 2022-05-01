const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee{
    constructor(){
        super('Manager');
        this.promise.then(a=>{
            this.promptManager().then(answers=>{
                this.officeNumber = answers.officeNumber;
            });
        })

        this.officeNumber;
   }
   getRole(){
       return 'Manager';
   }
   promptManager(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the Managers's office Number`,
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(`Please enter the Manager's office Number!`);
                return false;
              }
            }
          },      
    ]);
   }
}
module.exports = Manager;