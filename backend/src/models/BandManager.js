const AbstractManager = require("./AbstractManager");

class BandManager extends AbstractManager {
  static table = "band";

  insert(band) {
    return this.connection.query(
      `insert into ${BandManager.table} (title) values (?)`,
      [band.title]
    );
  }

  update(band) {
    return this.connection.query(
      `update ${BandManager.table} set title = ? where id = ?`,
      [band.title, band.id]
    );
  }
}

module.exports = BandManager;
