const models = require("../models");

class MusicStyleController {
  static browse = (req, res) => {
    models.musicStyle
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500).send("problem");
      });
  };

 
}

module.exports = MusicStyleController;
