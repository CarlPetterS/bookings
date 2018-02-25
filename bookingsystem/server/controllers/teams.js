const Team = require('../models').Team;

module.exports = {
  list(req, res) {
    return Team
      .all()
      .then(teams => res.status(200).send(teams))
      .catch(error => res.status(400).send(error));
  }
};