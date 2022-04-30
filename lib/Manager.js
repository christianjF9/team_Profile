const Employee = require('./Employee');

class Manager extends Employee{
    constructor(){
        super();
        this.officeNumber;
   }
   getSchool(){
        
   }
   getRole(){
       return 'Manager';
   }
}
module.exports = Manager;