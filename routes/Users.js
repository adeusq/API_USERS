const router = require('express').Router()
const Users = require('../controllers/UsersController')

router.get('/', Users().getUsers)
router.get('/:id', Users().getUserById)
router.post('/salvar', Users().saveNewUser)
router.post('/deletar', Users().deleteUser)
router.post('/atualizar', Users().updateUser)


module.exports = router;