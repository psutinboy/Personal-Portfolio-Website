const express = require("express");
const router = express.Router();

// GET /projects/about-me-app
router.get("/about-me-app", (req, res) => {
  res.render("about-me-app");
});

module.exports = router;
