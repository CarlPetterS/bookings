const Facility = require('../models').Facility;

module.exports = {
  list(req, res) {
    return Facility
      .all()
      .then(facilities => res.status(200).send(facilities))
      .catch(error => res.status(400).send(error));
  }
};