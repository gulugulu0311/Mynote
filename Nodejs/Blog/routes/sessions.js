/**
 * 登录、注册、
 */

const express = require("express");
const User = require("../models/users");
const md5 = require("blueimp-md5");

let router = express.Router();

/**
 * 注册页面
 */
router.get("/", (req, res) => {
  res.render("index.html", {
    user: req.session.user,
  });
});

/**
 * 登录页面
 */
router.get("/login", (req, res) => {
  res.render("login.html");
});
router.post("/login", (req, res) => {
  //...
  console.log(req.body);
  User.findOne(
    {
      email: req.body.email,
      password: md5(md5(req.body.password)),
    },
    (err, data) => {
      if (err) {
        return res.status(500).json({
          err_code: 500,
          message: "服务器错误",
        });
      }

      if (!data) {
        return res.status(200).json({
          err_code: 1,
          message: "email or password is invalid",
        });
      }

      req.session.user = data;
      return res.status(200).json({
        err_code: 0,
      });
    }
  );
});

/**
 * 注册页面
 */
router.get("/register", (req, res) => {
  res.render("register.html");
});
router.post("/register", (req, res) => {
  //...
  //判断用户是否已存在
  User.findOne(
    {
      $or: [{ email: req.body.email }, { nickname: req.body.nickname }],
    },
    (err, data) => {
      if (err) {
        return res.status(500).json({
          err_code: 500,
          message: "服务器错误",
        });
      }
      if (data) {
        //邮箱或昵称已存在
        return res.status(200).json({
          err_code: 1,
          message: "nickname or email already exits",
        });
      }

      //注册；添加数据库数据

      req.body.password = md5(md5(req.body.password)); //对密码进行重复加密
      new User(req.body).save((err, user) => {
        if (err) {
          return res.status(500).json({
            err_code: 500,
            message: "Internal error",
          });
        }
        req.session.user = user; //记录用户的登录状态
        res.status(200).json({
          err_code: 0,
          message: "OK",
        });
      });
    }
  );
});
router.get("/logout", (req, res) => {
  /**
   * 清除登录状态
   *a标签默认同步提交 可在服务器端进行重定向
   */
  req.session.user = null;
  res.redirect("/");
});
module.exports = router;
