const express = require('express')
// 创建express 实例
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/public/build')))

app.get('*', function (req, res) {
  res.sendFile('./index.html')
})

app.get('/', function (req, res) {
  res.send('Hello World')
})
// 监听端口号
app.listen(9999, () => {
  console.log('服务已启动')
})
