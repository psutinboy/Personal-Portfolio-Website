const express = require("express");
const router = express.Router();

// GET /projects/workout-pro
router.get("/workout-pro", (req, res) => {
  res.render("workout-pro");
});

module.exports = router; 