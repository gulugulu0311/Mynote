const express = require("express");
const bodyParser = require('body-parser')
const app = express();

//comment
let comments = [
  { name: "Mono", message: "Veni Vidi Vici", dataTime: "2021-08-16" },
  { name: "Ruby", message: "谢bro", dataTime: "2021-08-17" },
];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// view engine setup 配置art-template 模板引擎
app.engine("html", require("express-art-template"));
// app.set("view", {
//   debug: process.env.NODE_ENV !== "production",
// });
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "art");

//
app.use("/public", express.static("./public/"));

//routes
app.get("/", (req, res) => {
  res.render("index.html", {
    comments: comments,
  });
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/post", (req, res) => {
  res.render("post.html");
});

app.post("/post", (req, res) => {
  let comment = req.body;
  comment.dataTime = "2021-08-16";
  comments.unshift(comment);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("app is running...");
});
