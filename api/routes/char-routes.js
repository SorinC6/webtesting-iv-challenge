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

router.post("/", async (req, res) => {
  const char = req.body;
  try {
    const result = await db("chars").insert(char);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: "error trying to save the user in database" });
  }
});

module.exports = router;
