const mongoose = require("mongoose");
//引入模式对象
let Schema = mongoose.Schema
// 创建约束对象
let usersRule = new Schema({
  email: {
    type: String,
    required: true, //必填项
    unique: true  //唯一的
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true, //必填项
  },
  date: {
    type: Date,
    default: Date.now()  //默认值
  },
  enable_flag: {
    type: String,
    default: "Y", //必填项
  },
})

//创建模型对象
module.exports = mongoose.model("users", usersRule);

