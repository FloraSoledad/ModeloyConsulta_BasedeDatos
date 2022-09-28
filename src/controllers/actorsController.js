const { Actor } = require('../database/models');
module.exports = {
    list: (req, res) => {
        Actor.findAll()
            .then(actors => res.render('actorsList', { actors }))
            .catch(error => console.log(log))
    },
    detail: (req, res) => {
        Actor.findByPk(req.params.id)
            .then(actor => res.render('actorsDetail', { actor }))
            .catch(error => console.log(log))
    }
 }
