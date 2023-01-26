class NewsController {
    // [GET]/news
    index(req, res) {
        res.render('news');
    }

    // [GET]/news/:slug
    // slug: là 1 biến động nhận nhiều giá trị ngẫu nhiên /news/[slug]
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController();
