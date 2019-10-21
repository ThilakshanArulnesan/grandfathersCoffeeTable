// all register related routes go here
const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');

module.exports = (db) => {

  // client request for login page
  router.get('/register', (req, res) => {
    res.render('register', { registerAttempt: true });
  });

  // client post to login
  router.post('/register', (req, res) => {

    const username = req.body.username;
    const user = req.body;
    db.doesUserExist(username)
      .then(rows => {
        if (rows.length === 0) {
          db.addUser(user)
            .then(() => {
              res.render('index');
            })
            .catch(error => {
              console.error(error.stack);
            });
        } else {
          res.render('register', { registerAttempt: false });
        }
      })
      .catch(error => {
        console.error(error.stack);
      });
  });

  return router;
};
