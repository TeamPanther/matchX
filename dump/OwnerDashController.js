const Event = require('../models/Event');
const Space = require('../models/Space');
const Message = require('../models/Message');

// EVENT CONTROLLERS

const findConfirmedEvents = (req, res) => {
  Event.findAll({
    where: {
      OwnerId: req.body.owner_user_id,
      confirmed: true,
    },
  }).then((data) => {
    res.json(data);
  });
};

const findPendingEvents = (req, res) => {
  Event.findAll({
    where: {
      OwnerId: req.body.owner_user_id,
      confirmed: false,
    },
  }).then((data) => {
    res.json(data);
  });
};

const confirmEvent = (req, res, next) => {
  Event.findOne({
    where: { _id: req.body.event_id },
  }).then((event) => {
    event.update({
      confirmed: true,
    }).then(next());
  });
};

// this will return a JSON object of the updated event. Use this to update the confirmed table and
// use event's _id to update the unconfirmed table (or just have items in the table disappear on
// button press)

const deleteEvent = (req, res, next) => {
  Event.findOne({
    where: { _id: req.body.event_id },
  }).then((event) => {
    event.destroy({ force: true });
  }).then(next());
};

// SPACE CONTROLLERS

const findSpaces = (req, res) => {
  console.log('inside findspaces!!!')
  Space.findAll({
    where: { userId: req.body.owner_user_id },
  }).then((data) => {
    console.log('THIS IS DATA')
    console.log(data)
    res.json(data);
  });
};

const addSpace = (req, res, next) => {
  console.log('REQ BODY START')
  req.body = req.body.name

  console.log(req.body)
  console.log('REQ BODY END')

  Space.create({
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    rating: req.body.rating,
    picture: req.body.picture,
    tags: req.body.tags.split(' '),
    userId: req.body.owner_user_id,
  }).then(next());
};

const deleteSpace = (req, res, next) => {
  Space.findOne({
    where: { _id: req.body.space_id },
  }).then((space) => {
    space.destroy({ force: true });
  }).then(next());
};

// MESSAGE CONTROLLERS

const findMessages = (req, res) => {
  Message.findAll({
    where: { OwnerId: req.body.owner_user_id },
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
  findSpaces,
  findMessages,
  confirmEvent,
  deleteEvent,
  addSpace,
  deleteSpace,
  createMessage,
};
