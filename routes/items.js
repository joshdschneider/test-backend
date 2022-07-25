const express = require('express');
const router = express.Router();
const { items } = require('../data/items');

router.get('/', (req, res) => {
  try {
    res.status(200).send({ items });
  } catch (e) {
    res.status(500).send({ message: e.message });
    console.error(e);
  }
});

module.exports = router;
