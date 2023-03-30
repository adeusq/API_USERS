const moment = require('moment')
moment.locale('pt-br')
const { Donors } = require('../models/index')

function DonorsController() {
    return {

        async getDonors(req, res)  {

            const doadores = await Donors.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } })
            
                   
            return res.render('doadores/pages', { doadores, moment })
        
        },

        async getDonorByPf(req, res) {

            const { pf } = req.params

            const doador = await Donors.findOne({ where: { pf }, attributes: { exclude: ['createdAt', 'updatedAt'] } })

            return res.render('doadores/pages/dadosDoador', { doador, moment })
        },

        async saveNewDonor(req, res) {

            const { name, birthdate, pf, nameMother, tipagemABO, tipagemRh, pai, fenotipagemRhK, fenotipagemEstendida, genotipagem, observacao } = req.body


            const [ donor, created ] = await Donors.findOrCreate({
                where: { pf },
                defaults: { name, birthdate, pf, nameMother, tipagemABO, tipagemRh, pai, fenotipagemRhK, fenotipagemEstendida, genotipagem, observacao }
            })

            if(!created) return res.redirect('/doadores')

            return res.redirect('/doadores')

        },

        // async deleteUser(req, res) {

        //     const { id } = req.body

        //     const usuario = await Users.findOne({ where: { id } })

        //     try {

        //         if(usuario) await Users.destroy({ where: { id }})
    
        //         return res.status(200).json({ 
        //             status: 200,
        //             message: "Usuário deletado com sucesso!",
        //             data: usuario
        //         })
        //     } catch(err) {
        //         return res.status(400).json({
        //             status: 400, 
        //             error:'Bad Request', 
        //             message: err,
        //         })
        //     }
        // },

        // async updateUser(req, res) {

        //     const { id, name, birthdate, email, isAdmin } = req.body

        //     await Users.update({ name, birthdate, email, isAdmin }, { where: { id }})

        //     return res.status(200).json({
        //         status: 200,
        //         message: 'Usuário atualizado com sucesso.'
        //     })
        // }
    }
}

module.exports = DonorsController;
