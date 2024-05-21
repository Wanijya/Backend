const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/posts');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "Wani",
    email: "Wani@example.com",
    age: 21,
  })
  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "saare log kese hoo..",
    user: "664c9d771c43ec0f8e667c08",
  })

  let user = await userModel.findOne({_id: "664c9d771c43ec0f8e667c08"});
  user.posts.push(post._id);
  await user.save();

  res.send({post, user});
});

app.listen(3000);