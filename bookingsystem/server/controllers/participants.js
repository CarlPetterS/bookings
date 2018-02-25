const Participant = require('../models').Participant;
const Person = require('../models').Person;

module.exports = {
  create(req, res) {
     return Participant
      .create({
        bookingId: req.params.bookingId,
        personId: req.body.personId
      })
      .then(participant => res.status(201).send(participant))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Participant
      .all()
      .then(participants => res.status(200).send(participants))
      .catch(error => res.status(400).send(error));
  }
};