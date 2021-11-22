let http = require("http");
let fs = require("fs");
let template = require("art-template");
let url = require("url");

let comments = [
  { name: "Mono", message: "Veni Vidi Vici", dataTime: "2021-08-16" },
  { name: "Ruby", message: "谢bro", dataTime: "2021-08-17" },
];

http
  .createServer((req, res) => {
    //解析为一个方便操作的对象，查询字符串转为一个对象
    let parseObj = url.parse(req.url, true);
    //不包含？之后的内容
    let pathname = parseObj.pathname;

    if (pathname === "/") {
      fs.readFile("./views/index.html", (err, data) => {
        if (err) {
          return res.end("404 NOT FOUND");
        }

        let renderResult = template.render(data.toString(), {
          comments: comments,
        });
        res.end(renderResult);
      });
    } else if (pathname.indexOf("/public") === 0) {
      fs.readFile("." + pathname, (err, data) => {
        if (err) {
          return res.end("404 NOT FOUND");
        }
        res.end(data);
      });
    } else if (pathname === "/post") {
      fs.readFile("./views/post.html", (err, data) => {
        if (err) {
          return res.end("404 NOT FOUND");
        }
        res.end(data);
      });
    } else if (pathname === "/pinglun") {
      let comment = parseObj.query;
      comment.dataTime = "2021-08-18";
      comments.push(comment);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      // console.log("收到表单请求了",parseObj.query);
      res.end();
    } else {
      fs.readFile("./views/404.html", (err, data) => {
        res.end(data);
      });
    }
  })
  .listen(8088, () => {
    console.log("Server is running...");
  });
