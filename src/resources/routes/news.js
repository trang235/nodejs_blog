const express = require('express')
const router = express.Router()

const newsController = require('../../app/controllers/NewsController');

// newsController.index

// '/' tuyến đường chọc vào đầu tiên khi truy xuất vào news
// tuyến đường luôn khớp từ trên xuống -> tuyến đường gốc phải ở dưới cùng
// để nó phải đi qua những tuyến đường bên trên trc khi đến tuyến đường gốc
router.use('/:slug', newsController.show)

router.use('/', newsController.index)

module.exports = router