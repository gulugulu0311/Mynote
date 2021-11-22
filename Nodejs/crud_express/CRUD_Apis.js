const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//设计集合结构
const students = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
});

//连接MongoDB数据库
mongoose.connect("mongodb://localhost:27017/20210822", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//导出数据库模型
module.exports = mongoose.model("Student", students);
