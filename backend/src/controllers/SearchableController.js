const models = require("../models");

class SearchableController {
  static browse = (req, res) => {
    const { needle } = req.query;
    models.searchable
      .findMany(needle)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500).send("Raté, essaie encore!");
      });
  };

  // static read = (req, res) => {
  //   models.search
  //     .find(req.params.id)
  //     .then(([rows]) => {
  //       if (rows[0] == null) {
  //         res.sendStatus(404);
  //       } else {
  //         res.send(rows[0]);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };
}
module.exports = SearchableController;
