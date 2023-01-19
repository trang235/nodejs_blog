const express = require('express')  /* đi vào thư mục modules để tải */
const app = express()
const port = 3000
// routes
app.get('/thoi-su', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
  res.send('Hello World!')
})
// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})