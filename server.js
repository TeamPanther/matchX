const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./server/controllers/UserController');
const OwnerDashController = require('./server/controllers/OwnerDashController');
const RenterDashController = require('./server/controllers/RenterDashController');

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

app.post('/signup', UserController.createUser);
app.post('/user/find', UserController.findUser);

app.post('/getSpaces', OwnerDashController.findSpaces);

app.post('/deleteSpace', OwnerDashController.deleteSpace, OwnerDashController.findSpaces);

app.post('/addSpace', OwnerDashController.addSpace, OwnerDashController.findSpaces);

app.post('/getConfirmedEventsOwner', OwnerDashController.findConfirmedEvents);

app.post('/getConfirmedEventsRenter', RenterDashController.findConfirmedEvents);

app.post('/getPendingEventsOwner', OwnerDashController.findPendingEvents);

app.post('/getPendingEventsRenter', RenterDashController.findPendingEvents);

app.post('/addEvent', RenterDashController.createEvent, RenterDashController.findPendingEvents);

app.post('/deleteEventRenter', RenterDashController.deleteEvent, RenterDashController.findPendingEvents);

app.post('/deleteEventOwner', OwnerDashController.deleteEvent, OwnerDashController.findPendingEvents);

app.post('/confirmEvent', OwnerDashController.confirmEvent, OwnerDashController.findPendingEvents);

app.listen(3000);
