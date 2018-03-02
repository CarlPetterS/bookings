const Employee = require('../models').Employee;

module.exports = {
  retrieve(req, res) {
    return Employee
      .findById(req.params.employeeId)
      .then(employee => res.status(200).send(employee))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Employee
      .all()
      .then(employees => res.status(200).send(employees))
      .catch(error => res.status(400).send(error));
  }
};