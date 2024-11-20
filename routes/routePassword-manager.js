const express = require("express");
const router = express.Router();

// GET /projects/password-manager
router.get("/", (req, res) => {
  res.render("projects/password-manager");
});

module.exports = router;
