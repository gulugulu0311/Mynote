const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//1、设计集合结构（表结构）
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

//连接MongoDB数据库
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**
 * 将文档结构发布为模型
 * @users 数据库名称，mongoose会自动将大写名词的字符串生成小写复数的集合名称
 * @userSchema  集合结构（表结构）
 * @User 模型构造函数
 */
let User = mongoose.model("User", userSchema);

/**
 * 2、添加数据
 */
let admin = new User({
  username: "admin_foo",
  password: "123456_ml",
  email: "1079713055@qq.com",
});

// admin.save().then(() => console.log("DONE"));

// User.find((err, ret) => {
//   if (err) {
//     console.log("查询失败");
//   }
//   console.log(ret);
// });

/**
 * 3、删除
 */

// User.deleteOne({ username: "admin_foo" }, (err, ret) => {
//   if (err) {
//     console.log("删除失败");
//   }
//   console.log("删除成功");
// });

/**
 * 4、更新
 */

// User.updateOne({ username: "admin" }, { password: "159632ml" }, (err, res) => {
//   if (err) {
//     console.log("更新失败");
//   }
//   console.log(res);
// });

User.find((err,data) => {
  if(err){
    console.log("查找失败");
  };
  console.log(data);
})
