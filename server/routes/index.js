const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  return res.sendStatus(200).json({ message: "everything is working" });
});

module.exports = router;
