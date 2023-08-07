const News = require('./news-model');

const createNews = async  (req, res) => {
    const news = await News.create(req.body)
    res.send(news);
}

const getNews =  async (req, res) => {
    let news;
    if(req.params.id) {
        news = await News.findById(req.params.id)
    } else {
        news = await News.find()
    }
    res.send(news);
}

module.exports = {
    getNews,
    createNews
}
