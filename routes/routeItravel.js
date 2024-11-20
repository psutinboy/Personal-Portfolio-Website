const express = require("express");
const router = express.Router();

// GET /projects/itravel
router.get("/", (req, res) => {
  res.render("projects/itravel");
});

module.exports = router;
