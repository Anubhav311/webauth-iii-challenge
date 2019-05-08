const router = require('express').Router();

const Users = require('./users-model.js');
// const restricted = require('../auth/restricted-middleware.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json('Hi');
    })
    .catch(err => res.send(err));
});

// function checkRoles(role) {
//   return function (req, res, next) {
//     if(
//       req.decodedToken && 
//       req.decodedToken.roles && 
//       req.decodedToken.roles.includes(role)
//     ) {
//       next();
//     } else {
//       res.status(403).json({message: "can't touch this!"})
//     }
//   }
// }

module.exports = router;