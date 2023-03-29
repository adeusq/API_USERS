const Users = require('../routes/Users')
const Home = require('../routes/Home')

function initializeRoutes(app) {
    app.use('/usuarios', Users)
    app.use('/home', Home)
}

module.exports = initializeRoutes;