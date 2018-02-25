const Room = require('../models').Room;
const Facility = require('../models').Facility;

module.exports = {
  list(req, res) {
    return Room
      .findAll({
        include: [{
          model: Facility,
          as: 'facilities',
        }],
      })
      .then(rooms => res.status(200).send(rooms))
      .catch(error => res.status(400).send(error));
  }
};