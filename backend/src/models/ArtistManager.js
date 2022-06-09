const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  static table = "artist";

  findAll() {
    return this.connection.query(`select role from  ${this.table}`);
  }

  // insert(item) {
  //   return this.connection.query(
  //     `insert into ${ArtistManager.table} (title) values (?)`,
  //     [item.title]
  //   );
  // }

  // update(item) {
  //   return this.connection.query(
  //     `update ${ItemManager.table} set title = ? where id = ?`,
  //     [item.title, item.id]
  //   );
  // }
}

module.exports = ArtistManager;
