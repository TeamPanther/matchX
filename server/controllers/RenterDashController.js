const Event = require('../models/Event');
const Message = require('../models/Message');

// EVENT CONTROLLERS

const findConfirmedEvents = (req, res) => {
  Event.findAll({
    where: {
      RenterId: req.body.renter_user_id,
      confirmed: true,
    },
  }).then((data) => {
    res.json(data);
  });
};

const findPendingEvents = (req, res) => {
  Event.findAll({
    where: {
      RenterId: req.body.renter_user_id,
      confirmed: false,
    },
  }).then((data) => {
    res.json(data);
  });
};

const createEvent = (req, res, next) => {
  Event.create({
    title: req.body.title,
    OwnerId: req.body.owner_user_id,
    RenterId: req.body.renter_user_id,
    spaceId: req.body.space_id,
    start: req.body.start,
    end: req.body.end,
    confirmed: false,
  }).then(next());
};

const deleteEvent = (req, res, next) => {
  Event.findOne({
    where: { _id: req.body.event_id },
  }).then((event) => {
    event.destroy({ force: true });
  }).then(next());
};

// MESSAGE CONTROLLERS

const findMessages = (req, res) => {
  Message.findAll({
    where: { RenterId: req.body.renter_user_id },
  }).then((data) => {
    res.json(data);
  });
};

const createMessage = (req, res) => {
  Message.create({
    OwnerId: req.body.owner_user_id,
    RenterId: req.body.renter_user_id,
    spaceId: req.body.space_id,
    message: req.body.message,
  }).then((data) => {
    res.json(data);
  });
};

module.exports = {
  findConfirmedEvents,
  findPendingEvents,
  findMessages,
  deleteEvent,
  createEvent,
  createMessage,
};
