const peopleController = require('../controllers').people;
const employeesController = require('../controllers').employees;
const businessPartnersController = require('../controllers').businessPartners;
const teamsController = require('../controllers').teams;
const roomsController = require('../controllers').rooms;
const facilitiesController = require('../controllers').facilities;
const costLogsController = require('../controllers').costLogs;
const bookingsController = require('../controllers').bookings;
const participantsController = require('../controllers').participants;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Booking System API!\n\nList all rows paths:\n/api/(bookings|businesspartners|costlogs|employees|teams|rooms|facilities|participants|people)\n\n',
  }));

  app.get('/api/people', peopleController.list);

  app.get('/api/employees', employeesController.list);

  app.get('/api/businesspartners', businessPartnersController.list);

  app.get('/api/teams', teamsController.list);

  app.get('/api/rooms', roomsController.list);

  app.get('/api/facilities', facilitiesController.list);

  app.post('/api/teams/:teamId/costlogs', costLogsController.create);
  app.get('/api/costlogs', costLogsController.list);

  app.get('/api/bookings', bookingsController.list);
  app.post('/api/bookings', bookingsController.create);
  app.delete('/api/bookings/:bookingId', bookingsController.destroy);

  app.get('/api/participants', participantsController.list);
  app.post('/api/bookings/:bookingId/participants', participantsController.create);
};