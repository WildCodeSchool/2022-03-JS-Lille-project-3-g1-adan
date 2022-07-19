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

  static read = (req, res) => {
    const data = {};
    models.musicStyle.findArtistByStyle(req.params.id).then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        data.artist = rows;
      }
    });
    // .then(() => {
    models.musicStyle.findBandByStyle(req.params.id).then(([columns]) => {
      if (columns[0] == null) {
        res.sendStatus(404);
      } else {
        data.band = columns;
        res.send(data);
      }
    });
    // })
    // .catch((err) => {
    //   console.error(err);
    //   res.sendStatus(500);
    // });
  };
}

module.exports = MusicStyleController;
