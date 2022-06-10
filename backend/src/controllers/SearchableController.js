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

}
module.exports = SearchableController;
