// inherits class from Employee and adds new class

const { off } = require("process");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
