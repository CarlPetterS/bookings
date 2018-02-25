const BusinessPartner = require('../models').BusinessPartner;

module.exports = {
  list(req, res) {
    return BusinessPartner
      .all()
      .then(businessPartners => res.status(200).send(businessPartners))
      .catch(error => res.status(400).send(error));
  }
};