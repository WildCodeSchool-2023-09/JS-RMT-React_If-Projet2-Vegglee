const express = require("express");

const router = express.Router();
const client = require("../database/client");

// Define Your API Routes Here

// Import itemControllers module for handling item-related operations

// Route to get a list of vegetables
router.get("/vegetables", (req, res) => {
  let query = "SELECT * FROM vegetable";
  let params = []; // Déplacez la déclaration en dehors de la condition

  if (req.query.filter) {
    query += " WHERE name LIKE ?";
    params = [`%${req.query.filter}%`];
  } else {
    query += " LIMIT 25";
  }

  client
    .query(query, params)
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/basket/:type", (req, res) => {
  client
    .query("SELECT * FROM basket WHERE type = ? ", [req.params.type])
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

router.get("/recipes", (req, res) => {
  client
    .query("SELECT * FROM recipe LIMIT 8")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/categories", (req, res) => {
  client
    .query("SELECT * FROM categorie")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/recettes/:id", (req, res) => {
  client
    .query("SELECT * FROM recipe WHERE id = ?", [req.params.id])
    .then((result) => {
      if (result[0].length === 0) {
        res.status(404).json({ message: "Aucune Recette trouvé avec cet ID" });
      } else {
        res.status(200).json(result[0][0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Route to get a specific item by ID
// router.get("/vegetables/:id", itemControllers.read);

// Route to add a new item
// router.post("/vegetables", itemControllers.add);

module.exports = router;
