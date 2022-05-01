const Employee = require('./Employee');

class Intern extends Employee{
    constructor(){
        super('intern');
        this.school;
        this.promise.then(a=>{
            this.promptManager().then(answers=>{
                this.school = answers.school;
            });
        })
   }
   getSchool(){
        
   }
   getRole(){
       return 'Intern';
   }
   promptManager(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: `What is the intern's github`,
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(`Please enter the intern's school!`);
                return false;
              }
            }
          },      
    ]);
   }
}
module.exports = Intern;