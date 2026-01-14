const bcrypt = require('bcrypt');
const express = require('express');
const User = require('../models/User');
const router = express.Router();
router.post('/register', async (req, res) => {
  // const { email, password } = req.body;

  const {nom,prenom,pwd,email,fonction} = req.body;

  const hashedPassword = await bcrypt.hash(pwd, 10);

  const user = new User({
    nom,
    prenom,
    email,
    pwd: hashedPassword,
    fonction
  });

  await user.save();

  res.status(201).json({ message: 'User created' });
});

module.exports = router;