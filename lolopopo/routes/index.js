var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  req.session.ban = true;
  res.render("index");
});
router.get("/checkban", function (req, res) {
  if (req.session.ban === true) {
    res.send("you are baned!");
  } else {
    res.send("not baned!");
  }
});
router.get("/removeban", function (req, res) {
  req.session.destroy(function (err) {
    console.log(err);
    res.send("ban removed!");
  });
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
