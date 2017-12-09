const User = require('../models/User');

// this function connects to the signup page. It returns an array containing two indices:
// the user and a boolean, which will be true if the user was created and false if the user
// already exists.

// Returns array of User object found or created with a boolean whether new object was created
const createUser = (req, res) => {
  User.findOrCreate({
    where: {
      username: req.body.username,
    },
    defaults: {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      pic: req.body.pic,
      phone: req.body.phone,
      rating: req.body.rating,
      age: req.body.age,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      genderPreference: req.body.genderPreference,
      question1: req.body.question1,
      question2: req.body.question2,
      question3: req.body.question3,
      question4: req.body.question4,
      question5: req.body.question5,
    },
  }).then((data) => {
    res.json(data);
  });
};

// need to add bcrypt to this later
const findUser = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  }).then((data) => {
    if (!data) return res.status(400).send('No user found');
    const user = { id_token: data._id };
    res.status(200).send(user);
  });
};

const compareUser = (req, res) => {
  User.findOne({
    where: { username: req.body.username },
  }).then((oneData) => {
    User.find({}).then((data) => {
      const bestMatches = [];
      const choices = data.filter(user => user.username !== req.body.username);
      const diffs = choices.map((user, ind) => {
        return {
          diff: Math.abs(oneData.question1 - user.question1) +
                Math.abs(oneData.question2 - user.question2) +
                Math.abs(oneData.question3 - user.question3) +
                Math.abs(oneData.question4 - user.question4) +
                Math.abs(oneData.question5 - user.question5),
          index: ind,
        };
      // sort diffs lowest to highest
      }).sort((a, b) => a.diff - b.diff);

      // Include best matches
      diffs.forEach((elem) => {
        bestMatches.push(choices[elem.ind]);
      });
      res.send(bestMatches);
    });
  });
};

module.exports = { createUser, findUser, compareUser };

