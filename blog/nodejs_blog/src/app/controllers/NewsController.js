class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    //[GET] /news/...
    show(req, res) {
        res.send('News Detail');
    }
}
module.exports = new NewsController();
