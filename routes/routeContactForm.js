const express = require("express");
const router = express.Router();

// GET /contact/form
router.get("/", (req, res) => {
  res.render("contactForm");
});

module.exports = router; 