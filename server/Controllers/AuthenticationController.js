const seqeuelize = require('./../../models/database');
const { Session } = require('./../../models/Models');

function isAuthenticated(req, res, next) {
  if (!req.cookies.ssid) {
    res.status(200).end();
  } else {
    const newSession = {ssid: req.cookies.ssid, username: req.body.username};
    Session.sync().then(() => {
      Session.create(newSession)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).end());
   });
  }
}

function verifySession(req, res, next) {
  Session.findOne({ssid: req.body.ssid})
    .then(results => {
      if (!results) { 
        isAuthenticated(req, res, next);
      }
      else { res.status(200).send(results); }
    })
    .catch(error => res.status(400).end());
}

module.exports = { isAuthenticated, verifySession };
