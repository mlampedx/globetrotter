const { Favorite } = require('./../../models/Models');

function addFavorite(req, res) {
  Favorite.sync().then(() => {
    Favorite.create(req.body)
      .then(() => res.status(200).end())
      .catch(err => res.status(400).send(err));
  }).catch((err => res.status(500).send(err)));
}

function deleteFavorite(req, res) {
  Favorite.destroy({ where: { username: req.body.username, name: req.body.name } })
    .then(() => res.status(200).end())
    .catch(err => res.status(400).send(err));
}

function retrieveFavorites(req, res) {
  Favorite.findAll({ where: { username: req.body.username } })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
}

module.exports = { addFavorite, deleteFavorite, retrieveFavorites };
