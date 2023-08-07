const Router = require('../utils/Router');
const controller = require('./news-controller');
const router = new Router()

router.get('/news', controller.getNews)

router.post('/news', controller.createNews)

module.exports = router
