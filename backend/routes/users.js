const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Add a new user
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ error: 'Unable to save the user' }));
});

module.exports = router;
