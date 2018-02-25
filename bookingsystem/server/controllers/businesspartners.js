const BusinessPartner = require('../models').BusinessPartner;

module.exports = {
  list(req, res) {
    return BusinessPartner
      .all()
      .then(businessPartner => res.status(200).send(businessPartner))
      .catch(error => res.status(400).send(error));
  }
};