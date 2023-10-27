const express = require("express");

const router = express.Router();
const client = require("../database/client");

// Define Your API Routes Here

// Import itemControllers module for handling item-related operations

// Route to get a list of vegetables
router.get("/vegetables", (req, res) => {
  client
    .query("SELECT * FROM vegetable")
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// Route to get a specific item by ID
// router.get("/vegetables/:id", itemControllers.read);

// Route to add a new item
// router.post("/vegetables", itemControllers.add);


module.exports = router;
