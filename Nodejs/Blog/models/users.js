const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema结构
 */
let userSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  nickname: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  created_time: {
    type: Date,
    default: Date.now,
  },
  last_modified_time: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
    default: "/public/img/avatar-max-img.png",
  },
  bio: {
    type: String,
    default: "",
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1,
  },
  birthday: {
    type: Date,
  },
  status: {
    type: Number,
    //是否可以登录、评论
    //1:不可以评论
    //2:不可以登录
    enum: [0, 1, 2],
    default: 0,
  },
});

mongoose.connect("mongodb://localhost/Blog",{useNewUrlParser:true, useUnifiedTopology:true});

module.exports = new mongoose.model("User", userSchema);
