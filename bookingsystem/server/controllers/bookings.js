const Booking = require('../models').Booking;
const Participant = require('../models').Participant;
const Employee = require('../models').Employee;
const Room = require('../models').Room;

module.exports = {
  create(req, res) {
    return Booking
      .create({
        roomId: req.body.roomId,
        bookingId: req.body.bookingId,
        start_date: req.body.startDate,
        end_date: req.body.endDate,
        employeeId: req.body.booked_by,
      })
      .then(booking => res.status(201).send(booking))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Booking
      .findAll({
        include: [{
          model: Participant,
          as: 'participants',
        }]
      })
      .then(bookings => res.status(200).send(bookings))
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
      return Booking
        .find({
          where: {
            id: req.params.bookingId,
          },
        })
        .then(booking => {
          if (!booking) {
            return res.status(404).send({
              message: 'Booking Not Found',
            });
          }

          return booking
            .destroy()
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
};