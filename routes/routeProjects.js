const express = require("express");
const router = express.Router();

// GET /projects
router.get("/", (req, res) => {
  res.render("projects");
});

module.exports = router;
