const models = require("../models");

class SearchableController {
  static browse = (req, res) => {
    const { needle } = req.query;
    models.searchable
      .findMany(needle)
      .then(([rows]) => {
        rows.map((row) => {
          return { ...row, haystack: undefined };
        });
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}
module.exports = SearchableController;
