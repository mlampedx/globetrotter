const seqeuelize = require('./../../models/database');
const { Favorite } = require('./../../models/Models');

function addFavorite(req, res, next) {
  console.log('Adding favorite:', req.body)

  Favorite.sync().then(() => {
    Favorite.create(req.body)
      .then(() => res.status(200).end())
      .catch((error) => res.status(400).send(error));
  }).catch((error => res.status(500).send(error)));
}

function deleteFavorite(req, res, next) {
  Favorite.destroy({ where: { username: req.body.username, name: req.body.name } })
    .then(() => res.status(200).end())
    .catch((error) => res.status(400).send(error));
}

function retrieveFavorites(req, res, next) {
  Favorite.findAll({ where: {username: req.body.username }})
    .then((data) => res.status(200).send(data))
    .catch(error => res.status(400).send(error));
}

module.exports = { addFavorite, deleteFavorite, retrieveFavorites };
