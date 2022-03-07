const express = require("express");
const app = express();

const db = require("./db");

const usersRouter = require("./router/usersRouter")

// 设置跨域和相应数据格式
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  if (req.method == 'OPTIONS') res.sendStatus(200)
  /*让options请求快速返回*/ else next()
})

app.use(express.json()) //解析json
app.use(express.urlencoded({ extended: true })) //解析urlencoded


//如果数据库连接成功 立即启动服务器 在整个过程中无论多少次请求 数据库只连接一次


//promise风格
db.then((ret) => {
  //从resolve得到正常结果
  console.log("成功2");

  //users request
  app.use("/users", usersRouter)
  // 没有匹配上任何路由时返回404
  app.use((req, res) => { res.status(404).json({ status: 404, message: "not found" }) })
  app.listen(3000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("启动成功");
    }
  });

}, (ret) => {
  //从reject得到错误信息
  console.log(ret);
})

//双callback函数
// db(() => {
//   //users request
//   app.use("/users", usersRouter)

//   // 没有匹配上任何路由时返回404
//   app.use((req, res) => { res.status(404).json({ status: 404, message: "not found" }) })
//   app.listen(3000, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("启动成功");
//     }
//   });

// }, (err) => {
//   console.log(err);
// })

// //callback风格
// db((err) => {
//   if (err) {
//     console.log("失败");
//   } else {
//     console.log("成功");

//     //users request
//     app.use("/users", usersRouter)

//     // 没有匹配上任何路由时返回404
//     app.use((req, res) => { res.status(404).json({ status: 404, message: "not found" }) })
//     app.listen(3000, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("启动成功");
//       }
//     });
//   }
// })





