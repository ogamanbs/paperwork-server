const express = require('express');
const router = express.Router();
const User = require('../models/users');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('users');
});

router.post('/', async (req, res, next) => {
  const {name, email, firmName, country} = req.body;
  console.log(name, email, firmName, country);
  const user = await User.create({
    name,
    email,
    firmName,
    country
  });
  if(user) {
    console.log(user);
    res.json({message: 'successfully added to early access list'});
  } else {
    res.json({message: 'User failed to be added in the early access list'})
  }
})

module.exports = router;
