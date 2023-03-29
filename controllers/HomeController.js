

function HomeController() {

    return { 

        async getHome(req, res) {

            return res.render('home/pages/')
        }

    }
}

module.exports = HomeController;