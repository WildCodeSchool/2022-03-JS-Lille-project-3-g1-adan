const AbstractManager = require("./AbstractManager");

class MusicStyleManager extends AbstractManager {
  static table = "musicStyle";

  findAll() {
    return this.connection.query(
      `select role, style from  ${this.table} as musicStyle left join artist on artist.id=musicStyle.id`
    );
  }
}

module.exports = MusicStyleManager;
