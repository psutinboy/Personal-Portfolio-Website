const express = require("express");
const router = express.Router();

// GET /projects/java-atm
router.get("/", (req, res) => {
  res.render("projects/java-atm");
});

module.exports = router; 