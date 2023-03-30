const Donors = require('../routes/Donors')
const Home = require('../routes/Home')

function initializeRoutes(app) {
    app.use('/doadores', Donors)
    app.use('/home', Home)
}

module.exports = initializeRoutes;