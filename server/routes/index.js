var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ message: "Hello from server!" });
});

module.exports = router;