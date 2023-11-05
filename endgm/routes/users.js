const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:21017/testendgm2");

mongoose.Schema({
  username: String,
  password: String,
});
