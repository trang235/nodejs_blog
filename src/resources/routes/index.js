const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    // routes
    // app.get('/', (req, res) => {
    //     // console.log(req.query);
    //     // console.log(req.query.q); // lấy value

    //     res.render('home')

    // })
    // req: chứa những thông tin mà ứng dụng yêu cầu trên server
    // res: chứa lựa chọn tuỳ chỉnh kết quả trả về qua response
    // app.get('/news', (req, res) => {
    //   console.log(req.query.q);
    //   res.render('news')
    // })

    // Local host ---Hosting (2 host cùng ý nghĩa như nhau)

    // Action ---> Dispatcher ---> Function handler
    // đọc action, khớp -> thực thi function handler

    // app.get('/search', (req, res) => {
    //     res.render('search')
    // })

    app.post('/search', (req, res) => {
        console.log(req.body);
        res.send('');
    });
}

module.exports = route;
