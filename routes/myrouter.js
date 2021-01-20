
const express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("home");
});

router.get("/services", function (req, res, next) {
  res.render("services");
});

router.get("/contact", function (req, res, next) {
  res.render("contact");
});

module.exports = router;
