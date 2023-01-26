const express = require('express'); /* đi vào thư mục modules để tải */
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./resources/routes');

//khi gặp path này, với dạng file tĩnh, nó sẽ kiểm tra thư mục mà ta join
// cung cấp cho nó trong cái phương thức static. Phương thức static() nhận
// path.join(...) là tham số và trả về chính path của thư mục public này
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//XMLHttpRequest, fetch, axios,
//http logger
app.use(morgan('combined'));

//template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
    app.set('views', path.join(__dirname, 'resources/views'));

//những trang ko thuộc tài nguyên cụ thể nào
// home, search, contact

// routes init
route(    app);

// 127.0.0.1 - localhost
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
