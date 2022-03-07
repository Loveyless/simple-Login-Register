const mongoose = require("mongoose");

// 请求数据库的地址
const IP = "localhost";
const PORT = "27017";
const DB_NAME = "users"

//promise风格
var db = new Promise((resolve, reject) => {
  mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`, (err, res) => {
    if (err) {
      reject(err)
    } else {
      console.log("连接成功1");
      resolve();
    }
  })
})

// //双callback风格
// function db(success,failed) {
//   mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`, (err, res) => {
//     if (err) {
//       failed(err);
//     } else {
//       console.log("连接成功1");
//       success();
//     }
//   })
// }

//callback风格
// function db(callback) {
//   mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`, (err, res) => {
//     if (err) {
//       callback(err)
//     } else {
//       console.log("连接成功1");
//       callback();
//     }
//   })
// }



module.exports = db;