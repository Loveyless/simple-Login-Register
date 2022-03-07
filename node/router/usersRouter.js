const express = require("express");
const router = express.Router();

const usersModel = require("../mongodb/usersModel")


router.post("/login", (req, res, next) => {
  // 1获取输入
  const { email, password, name } = req.body
  // 2校验数据 这步跳过
  // 去数据库中查找
  usersModel.findOne({ email, password }, (err, data) => {
    if (err) {
      res.json({ status: 400, message: "网络不佳" })
      return
    }
    if (data) {
      console.log("用户登陆", req.body);
      res.json({ status: 200, message: "登陆成功",name:data.name})
      return
    }
    res.json({ status: 400, message: "用户名或密码错误" })
  })
})


router.post("/register", (req, res, next) => {
  usersModel.create(req.body, (err, data) => {
    if (!err) {
      console.log("用户注册", req.body);
      res.json({ message: "注册成功", name: req.body.name })
    } else {
      res.json({ err: err.message, message: '邮箱已经存在' })
    }
  })
})




module.exports = router