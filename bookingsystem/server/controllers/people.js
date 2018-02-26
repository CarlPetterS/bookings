const Person = require('../models').Person;
const Employee = require('../models').Employee;
const BusinessPartner = require('../models').BusinessPartner;

module.exports = {
  list(req, res) {
    return Person
      .findAll({
        include: [{
          model: Employee,
          as: 'employee',
        },{
          model: BusinessPartner,
          as: 'businessPartner',
        }],
      })
      .then(person => res.status(200).send(person))
      .catch(error => res.status(400).send(error));
  }
};