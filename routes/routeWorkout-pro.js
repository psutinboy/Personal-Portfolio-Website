const express = require("express");
const router = express.Router();

// GET /projects/workout-pro
router.get("/", (req, res) => {
  res.render("projects/workout-pro");
});

module.exports = router; 