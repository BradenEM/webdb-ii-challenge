const express = require("express");
const router = express.Router();
const db = require("../data/db-config");

router.get("/", async (req, res) => {
  const cars = await db("cars");
  try {
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
