const express = require("express");

const router = express.Router();
const client = require("../database/client");

// Define Your API Routes Here

// Import itemControllers module for handling item-related operations

// Route to get a list of vegetables
router.get("/vegetables", (req, res) => {
  let query = "";
  if (req.query.filter) {
    query = `SELECT * FROM vegetable WHERE name LIKE "%${req.query.filter}%"`;
  } else {
    query = "SELECT * FROM vegetable LIMIT 15";
  }
  client
    .query(query)
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

router.get("/vegetables/:id", (req, res) => {
  client
    .query("SELECT * FROM vegetable WHERE id = ?", [req.params.id])
    .then((result) => {
      if (result[0].length === 0) {
        res.status(404).json({ message: "Aucun légume trouvé avec cet ID" });
      } else {
        res.status(200).json(result[0][0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Ajoutez une deuxième route pour récupérer tous les légumes sans limitation
// router.get("/all-vegetables", async (req, res) => {
//   try {
//     const result = await client.query("SELECT * FROM vegetable");
//     res.status(200).json(result.rows);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// Route to get a specific item by ID
// router.get("/vegetables/:id", itemControllers.read);

// Route to add a new item
// router.post("/vegetables", itemControllers.add);

module.exports = router;
