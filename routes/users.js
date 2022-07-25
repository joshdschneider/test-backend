const express = require('express');
const router = express.Router();
const { users } = require('../data/users');

router.get('/', (req, res) => {
  try {
    res.status(200).send({ users });
  } catch (e) {
    res.status(500).send({ message: e.message });
    console.error(e);
  }
});

module.exports = router;
