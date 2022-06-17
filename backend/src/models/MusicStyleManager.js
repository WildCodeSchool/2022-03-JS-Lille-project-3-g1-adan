const AbstractManager = require("./AbstractManager");

class MusicStyleManager extends AbstractManager {
  static table = "musicStyle";

  insert(musicStyle) {
    return this.connection.query(
      `insert into ${MusicStyleManager.table} (title) values (?)`,
      [musicStyle.title]
    );
  }

  update(musicStyle) {
    return this.connection.query(
      `update ${MusicStyleManager.table} set title = ? where id = ?`,
      [musicStyle.title, musicStyle.id]
    );
  }
}

module.exports = MusicStyleManager;
