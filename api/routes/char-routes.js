const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");

router.get("/", (req, res) => {
  db("chars")
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ error: "error trying to get the users" });
    });
});

module.exports = router;
