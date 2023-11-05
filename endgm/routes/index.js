var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/failed", function (req, res) {
  req.flash("age", 11);
  req.flash("name", "wani");
  res.send("bangya");
});

router.get("/checkkro", function (req, res) { 
  console.log(req.flash("age"), req.flash("name")); 
  res.send("check kro backend ke terminal pe!");
});

module.exports = router;
