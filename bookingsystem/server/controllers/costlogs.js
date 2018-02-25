const CostLog = require('../models').CostLog;

module.exports = {
  create(req, res) {
     return CostLog
      .create({
        cost: req.body.cost,
        date: req.body.date,
        teamId: req.params.teamId,
      })
      .then(costlog => res.status(201).send(costlog))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return CostLog
      .all()
      .then(costlogs => res.status(200).send(costlogs))
      .catch(error => res.status(400).send(error));
  }
};