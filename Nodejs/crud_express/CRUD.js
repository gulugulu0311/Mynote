//数据操作文件模块
let fs = require("fs");

let path = "./database.json";

//获取所有学生列表
exports.find = (callback) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data).students);
  });
};

//根据id获取学生项
exports.findById = (id, callback) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      return callback(err);
    }
    //获取学生信息数组
    let students = JSON.parse(data).students;
    //获取学生项
    let stu = students.find((item) => {
      //id参数为str，需先转换为整数
      return item.id === parseInt(id);
    });
    callback(null, stu);
  });
};
//添加保存学生
exports.save = (student, callback) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      return callback(err);
    }
    let students = JSON.parse(data).students;
    //处理id问题
    student.id = students[students.length - 1].id + 1;

    students.push(student);
    //把对象数据转换为字符串
    let result = JSON.stringify({
      students: students,
    });
    //把字符串保存到文件中
    fs.writeFile(path, result, (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};
//删除学生数据
exports.delete = (id, callback) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      return callback(err);
    }
    //获取学生信息数组
    let students = JSON.parse(data).students;

    //findIndex方法查找要删除的项的下标
    let deletedId = students.findIndex((item) => {
      return item.id === parseInt(id);
    });

    //根据下表从数组中删除对应的学生对象
    students.splice(deletedId, 1);
    //把对象数据转换为字符串
    let result = JSON.stringify({
      students: students,
    });
    //把字符串保存到文件中
    fs.writeFile(path, result, (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};
//更新学生信息
exports.updateByID = (student, callback) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      return callback(err);
    }
    //获取学生信息数组
    let students = JSON.parse(data).students;
    // 注意：这里记得把 id 统一转换为数字类型
    student.id = parseInt(student.id);
    //获取要修改的学生项
    let stu = students.find((item) => {
      return item.id === student.id;
    });
    for (let key in student) {
      stu[key] = student[key];
    }
    //把对象数据转换为字符串
    let result = JSON.stringify({
      students: students,
    });
    //把字符串保存到文件中
    fs.writeFile(path, result, (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};
