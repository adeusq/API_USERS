const router = require('express').Router()
const Donors = require('../controllers/DonorsController')

router.get('/', Donors().getDonors)
router.get('/:pf', Donors().getDonorByPf)
router.post('/salvar', Donors().saveNewDonor)
// router.post('/deletar', Users().deleteUser)
// router.post('/atualizar', Users().updateUser)


module.exports = router;