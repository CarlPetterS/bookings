const Team = require('../models').Team;
const Employee = require('../models').Employee;
const CostLog = require('../models').CostLog;

module.exports = {
  list(req, res) {
    return Team
      .findAll({
        include: [{
          model: Employee,
          as: 'employees'
        },{
          model: CostLog,
          as: 'costlogs'
        }]
      })
      .then(teams => res.status(200).send(teams))
      .catch(error => res.status(400).send(error));
  }
};