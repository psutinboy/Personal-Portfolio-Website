const express = require("express");
const router = express.Router();

// GET /projects/about-me-app
router.get("/", (req, res) => {
  res.render("projects/about-me-app");
});

module.exports = router;
