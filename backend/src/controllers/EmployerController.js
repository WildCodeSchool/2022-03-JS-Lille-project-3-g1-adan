const models = require("../models");

class EmployerController {
  static browse = (req, res) => {
    models.employer
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.employer
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const employer = req.body;

    // TODO validations (length, format...)

    employer.id = parseInt(req.params.id, 10);

    models.employer
      .update(employer)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static editAllInfo = (req, res) => {
    const employer = req.body;

    // TODO validations (length, format...)

    employer.id = parseInt(req.params.id, 10);

    models.employer
      .updateAllInfo(employer)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.send(employer);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const employer = req.body;

    // TODO validations (length, format...)

    models.employer
      .insert(employer)
      .then(([result]) => {
        res.status(201).send({ ...employer, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.employer
      .deleteEmployer(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = EmployerController;
