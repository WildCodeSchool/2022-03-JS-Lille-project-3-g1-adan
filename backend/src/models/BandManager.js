const AbstractManager = require("./AbstractManager");

class BandManager extends AbstractManager {
  static table = "band";

  insert(band) {
    return this.connection.query(
      `insert into ${BandManager.table} (title) values (?)`,
      [band.title]
    );
  }

  findBand(id) {
    return this.connection.query(
      `SELECT b.name,b.city,b.cachet,b.logo,a.firstname,a.lastname,a.avatar,r.label,mS.style FROM band AS b LEFT JOIN artist_has_band AS ahb ON b.id = ahb.band_id LEFT JOIN artist AS a ON ahb.artist_id=a.id LEFT JOIN role AS r on a.role_id=r.id LEFT JOIN bandMusicStyle AS bMS ON b.id=bMS.band_id LEFT JOIN musicStyle AS mS ON bMS.musicStyle_id=mS.id WHERE b.id = ?`,
      [id]
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
