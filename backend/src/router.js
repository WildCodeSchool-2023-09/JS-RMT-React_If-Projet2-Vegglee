const express = require("express");
const client = require("../database/client");

const router = express.Router();

/**
 * Define Your API Routes Here
 */

// Import itemControllers module for handling item-related operations

// Route to get a list of items
router.get("/items", (req, res) => {
  client
    .query("SELECT * FROM item")
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = router;
// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);

module.exports = router;
