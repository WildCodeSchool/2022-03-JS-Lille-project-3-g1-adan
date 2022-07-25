const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  static table = "favorites";

  insert(followingUserId, followedType, followedTypeId) {
    return this.connection.query(
      `insert into ${this.table} (following_userId, followedType, followed_typeId) values (?, ?, ?)`,
      [followingUserId, followedType, followedTypeId]
    );
  }

  delete(followingUserId, followedType, followedTypeId) {
    return this.connection.query(
      `delete from ${this.table} where following_userId = ? AND followedType=? AND followed_typeId =?`,
      [followingUserId, followedType, followedTypeId]
    );
  }

  findFavorites(followingUserId) {
    return this.connection.query(
      `select * from  favDetails where following_userId = ?`,
      [followingUserId]
    );
  }
}

module.exports = FavoriteManager;
