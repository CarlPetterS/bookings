const peopleController = require('../controllers').people;
const employeesController = require('../controllers').employees;
const businessPartnersController = require('../controllers').businessPartners;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Booking System API!',
  }));

  app.get('/api/people', peopleController.list);
  app.get('/api/employees', employeesController.list);
  app.get('/api/businesspartners', businessPartnersController.list);
};