const express = require('express');
const router = express.Router();
const searchRouter = require('./search.js');

router.get('/', (req, res) => {
  res.send('Hello Asksuite World!');
});

router.use('/search', searchRouter);

module.exports = router;
