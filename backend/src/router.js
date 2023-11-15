const express = require("express");
const client = require("../database/client");

const router = express.Router();

/**
 * Define Your API Routes Here
 */

// Import itemControllers module for handling item-related operations

// Route to get a list of items
router.get("/vegetables", (req, res) => {
  client

    .query("SELECT * FROM vegetable LIMIT 15")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});
router.get("/small-basket", (req, res) => {
  client
    .query("SELECT * FROM small-basket  LIMIT 15")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);

module.exports = router;
