let fs = require("fs");
let express = require("express");
let router = express.Router();
let CRUD = require("./CRUD_Apis");

//查询数据库所有项
router.get("/", (req, res) => {
  CRUD.find((err, data) => {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.render("index.html", {
      students: data,
    });
  });
});

router.get("/students/new", (req, res) => {
  res.render("new.html");
});

//post添加学生信息
router.post("/students/new", (req, res) => {
  console.log(req.body);
  new CRUD(req.body).save((err) => {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.redirect("/");
  });
});
//编辑学生信息
router.get("/students/edit", (req, res) => {
  let id = req.query.id;
  CRUD.findById(id, (err, data) => {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.render("edit.html", {
      student: data,
    });
  });
});
//编辑学生信息 post 
router.post("/students/edit", (req, res) => {
  console.log(req.body.id);
  CRUD.findByIdAndUpdate(req.body.id, req.body, (err) => {
    if (err) {
      return res.status(500).send("Server error");
    }
    console.log("修改成功");
    console.log(req.body);
    res.redirect("/");
  });
});
//删除
router.get("/students/delete", (req, res) => {
  let id = req.query.id;
  CRUD.findOneAndDelete(id, (err) => {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.redirect("/");
  });
});
module.exports = router;
