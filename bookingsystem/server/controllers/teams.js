const Team = require('../models').Team;
const Employee = require('../models').Employee;

module.exports = {
  list(req, res) {
    return Team
      .findAll({
        include: [{
          model: Employee,
          as: 'employees'
        }]
      })
      .then(teams => res.status(200).send(teams))
      .catch(error => res.status(400).send(error));
  }
};