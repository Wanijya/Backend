const express = require("express");
const app = express();

const userModel = require("./userModel");

app.get("/", function (req, res) {
  res.send("Hello, world!");
});

app.get("/create", async function (req, res) {
  const createduser = await userModel.create({
    name: "Aarya",
    email: "aarya@example.com",
    username: "aaru",
  });
  res.send(createduser);
});

app.get("/read", async function(req, res) {
    const readuser = await userModel.find();
    res.send(readuser);
})

app.get("/update", async function (req, res) {
  const updateduser = await userModel.findOneAndUpdate(
    { username: "wanijya" },
    { name: "Wanijya Bisen" },
    { new: true }
  );
  res.send(updateduser);
});

app.get("/delete", async function(req, res) {
    const userdelete = await userModel.findOneAndDelete({username: "aaru"});
    res.send(userdelete);
})

app.listen(3000);
