const { Genre } = require('../database/models')
module.exports = {
    list: (req, res) => {
        Genre.findAll()
            .then(genres => res.render('genresList', { genres }))
            .catch(error => console.log(log))
        
    },
    detail: (req, res) => {
        Genre.findByPk(req.params.id)
            .then(genre => res.render('genresDetail', { genre }))
            .catch(error => console.log(log))
    }
}