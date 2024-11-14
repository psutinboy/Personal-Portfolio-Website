const express = require("express");
const router = express.Router();

// GET /projects/password-manager
router.get("/password-manager", (req, res) => {
  res.render("password-manager");
});

module.exports = router;
