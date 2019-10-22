// all logout related routes go here
const express = require('express');
const router = express.Router();

module.exports = () => {
  router.post('/logout', (req, res) => {
    // delete session cookie by setting it to null
    delete req.session.username;
    res.render('login', {loginAttempt: true});
  });

  return router;
};
