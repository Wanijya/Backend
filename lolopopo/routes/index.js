var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  const createduser = await userModel.create({
    username: "wanijyaly",
    age: 20,
    name: "Wanijya",
  });
  res.send(createduser);
});

router.get("/allusers", async function (req, res) {
  const allusers = await userModel.find();
  res.send(allusers);
});

router.get("/alluser", async function (req, res) {
  const alluser = await userModel.findOne({ username: "aarya" });
  console.log(alluser);
  res.send(alluser);
});

router.get("/delete", async function (req, res) {
  const deleteduser = await userModel.findOneAndDelete({
    username: "wanijyaly",
  });
  res.send(deleteduser);
});

module.exports = router;
