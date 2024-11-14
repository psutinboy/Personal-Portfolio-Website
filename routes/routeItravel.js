const express = require("express");
const router = express.Router();

// GET /projects/itravel
router.get("/itravel", (req, res) => {
  res.render("itravel");
});

module.exports = router;
