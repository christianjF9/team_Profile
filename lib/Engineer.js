const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(){
        super('engineer');
        this.github;
   }
   getGithub(){

   }
   getRole(){
       return 'engineer';
   }
   promptManager(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: `What is the engineer's github`,
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(`Please enter the engineer's github!`);
                return false;
              }
            }
          },      
    ]);
   }
}

module.exports = Engineer;