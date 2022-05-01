const inquirer = require('inquirer');
const Manager = require('./lib/Manager')


const promptMenu = () =>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            choices: ['intern','engineer','save and exit'],
          }]).then(answer =>{
                switch (answer.choice){
                    case 'intern':
                        var intern = new intern();
                        break;
                    case 'engineer': 
                        var engineer = new engineer();
                        break;
                }
          });
}

//var manager = new Manager();
promptMenu();
