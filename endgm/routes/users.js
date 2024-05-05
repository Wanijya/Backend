const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:21017/testendgm2");

const userShema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: [],
  },
  datecreated: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model("user", userShema);