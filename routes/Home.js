const router = require('express').Router()
const Home = require('../controllers/HomeController')

router.get('/', Home().getHome)

module.exports = router;