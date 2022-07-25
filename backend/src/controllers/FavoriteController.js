const models = require("../models");

class FavoriteController {
  static browse = (req, res) => {
    models.item
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = async (req, res) => {
    const followingUserId = req.user.id;
    try {
      const [rows] = await models.favorites.findFavorites(followingUserId);
      res.send(rows);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static edit = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    item.id = parseInt(req.params.id, 10);

    models.item
      .update(item)
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

  static add = (req, res) => {
    const followingUserId = req.user.id;
    const followedInfos = req.body.location.pathname.split("/");
    const followedType = followedInfos[1];
    const followedTypeId = parseInt(followedInfos[2], 10);
    models.favorites
      .insert(followingUserId, followedType, followedTypeId)
      .then(([item]) => {
        res.status(201).send({
          ...item,
        });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    const followingUserId = req.user.id;
    const fav = req.params.data.split("-");
    const followedType = fav[0];
    const followedTypeId = parseInt(fav[1], 10);
    models.favorites
      .delete(followingUserId, followedType, followedTypeId)
      .then(() => {
        models.favorites.findFavorites(followingUserId).then(([rows]) => {
          res.send(rows);
        });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = FavoriteController;
