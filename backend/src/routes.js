const express = require('express')
const routes = express.Router()
const TweetController = require('./controllers/TweetController')
const LikeController = require('./controllers/LikeController')

routes.get('/tweets', TweetController.list)
routes.post('/tweets', TweetController.create)
routes.post('/likes/:tweet', LikeController.create)

module.exports = routes