const express = require("express");
const router = express.Router();

// GET /projects/java-calculator
router.get("/", (req, res) => {
  res.render("projects/java-calculator");
});

module.exports = router; 