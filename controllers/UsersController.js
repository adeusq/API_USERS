const moment = require('moment')
moment.locale('pt-br')
const { Users } = require('../models/index')

function UsersController() {
    return {

        async getUsers(req, res)  {

            const usuarios = await Users.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } })

            return res.render('usuarios/pages', { usuarios })
        
        },

        async getUserById(req, res) {

            const { id } = req.params

            const usuario = await Users.findOne({ where: { id }, attributes: { exclude: ['createdAt', 'updatedAt'] } })

            return res.render('usuarios/pages/dadosUsuario', { usuario, moment })
        }, 

        async saveNewUser(req, res) {

            const { name, birthdate, email, isAdmin } = req.body


            const [ user, created ] = await Users.findOrCreate({
                where: { email },
                defaults: { name, birthdate, email, isAdmin }
            })

            if(!created) return res.redirect('/usuarios')

            return res.redirect('/usuarios')

        },

        async deleteUser(req, res) {

            const { id } = req.body

            const usuario = await Users.findOne({ where: { id } })

            try {

                if(usuario) await Users.destroy({ where: { id }})
    
                return res.status(200).json({ 
                    status: 200,
                    message: "Usuário deletado com sucesso!",
                    data: usuario
                })
            } catch(err) {
                return res.status(400).json({
                    status: 400, 
                    error:'Bad Request', 
                    message: err,
                })
            }
        },

        async updateUser(req, res) {

            const { id, name, birthdate, email, isAdmin } = req.body

            await Users.update({ name, birthdate, email, isAdmin }, { where: { id }})

            return res.status(200).json({
                status: 200,
                message: 'Usuário atualizado com sucesso.'
            })
        }
    }
}

module.exports = UsersController;
