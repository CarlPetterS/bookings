const Employee = require('../models').Employee;

module.exports = {
  list(req, res) {
    return Employee
      .all()
      .then(employees => res.status(200).send(employees))
      .catch(error => res.status(400).send(error));
  }
};