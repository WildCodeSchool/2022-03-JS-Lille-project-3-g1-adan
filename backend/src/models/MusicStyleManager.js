const AbstractManager = require("./AbstractManager");

class MusicStyleManager extends AbstractManager {
  static table = "musicStyle";

  findAll() {
    return this.connection.query(
      `select role, style from  ${this.table} as musicStyle left join artist on artist.id=musicStyle.id`
    );
  }

  //   insert(item) {
  //     return this.connection.query(
  //       `insert into ${ItemManager.table} (title) values (?)`,
  //       [item.title]
  //     );
  //   }

  //   update(item) {
  //     return this.connection.query(
  //       `update ${ItemManager.table} set title = ? where id = ?`,
  //       [item.title, item.id]
  //     );
  //   }
}

module.exports = MusicStyleManager;
