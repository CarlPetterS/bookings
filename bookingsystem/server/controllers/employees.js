const Employee = require('../models').Employee;
const Person = require('../models').Employee;

module.exports = {
  list(req, res) {
    return Employee
      .all()
      .then(employee => res.status(200).send(employee))
      .catch(error => res.status(400).send(error));
  }
};