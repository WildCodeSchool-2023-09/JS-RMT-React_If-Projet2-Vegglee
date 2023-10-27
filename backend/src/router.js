const express = require("express");

const router = express.Router();
const client = require("../database/client");

router.get("/vegetables", (req, res) => {
  client
    .query("SELECT * FROM vegetable")
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = router;
