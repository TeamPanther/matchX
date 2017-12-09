const User = require('../models/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
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
      password: bcrypt.hashSync(req.body.password, salt),
      email: req.body.email,
      phone: req.body.phone,
      pic: req.body.pic,
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
    where: { username: req.body.username },
  }).then((data) => {
    if (bcrypt.compareSync(req.body.password, data.dataValues.password)) {
      const user = { 
        id_token: data._id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        pic: data.pic,
        phone: data.phone,
        rating: data.rating,
        age: data.age,
        gender: data.gender,
        genderPreference: data.genderPreference
      };
      return user;
    } else {
      return res.status(400).send('No user found');
    }
  }).then((oneData) => {
    User.find({}).then((matchData) => {
      const bestMatches = [];
      const choices = matchData.filter(user => user.username !== oneData.username);
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

      const userObj = oneData;
      userObj.matches = bestMatches;
      res.status(200).send(userObj);
    });
  });
};

// Moving compareUser functionality to findUser
// const compareUser = (req, res) => {
//   User.findOne({
//     where: { username: req.body.username },
//   }).then((oneData) => {
//     User.find({}).then((data) => {
//       const bestMatches = [];
//       const choices = data.filter(user => user.username !== req.body.username);
//       const diffs = choices.map((user, ind) => {
//         return {
//           diff: Math.abs(oneData.question1 - user.question1) +
//                 Math.abs(oneData.question2 - user.question2) +
//                 Math.abs(oneData.question3 - user.question3) +
//                 Math.abs(oneData.question4 - user.question4) +
//                 Math.abs(oneData.question5 - user.question5),
//           index: ind,
//         };
//       // sort diffs lowest to highest
//       }).sort((a, b) => a.diff - b.diff);

//       // Include best matches
//       diffs.forEach((elem) => {
//         bestMatches.push(choices[elem.ind]);
//       });
//       res.send(bestMatches);
//     });
//   });
// };

module.exports = { createUser, findUser };
