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

  //  const isMatch = await bcrypt.compare(password, user.password);


router.post('/login',async (req,res) =>{
  const{email,pwd} = req.body;
  
  //find user by email
  const user = await User.findOne({email});
  
  if (!user) {
    return res.status(404).json({ message: 'Email not found' });
  }


  const matchPwd = await bcrypt.compare(pwd , user.pwd);

  if(!matchPwd)
  {
     return res.status(401).json({ message: 'Invalid password' });
    
  }
  else{
    // 3️⃣ Succès
    res.json({
      message: 'Login successful',
      userId: user._id
    });
  }
});

module.exports = router;