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
      `SELECT b.name,b.city,b.cachet,b.logo,a.firstname,a.lastname,a.avatar,r.label,mS.style FROM band as b inner join artist_has_band as ahb on b.id = ahb.band_id inner join artist as a on ahb.artist_id=a.id inner join role as r on a.role_id=r.id inner join bandMusicStyle as bMS on b.id=bMS.band_id
      inner join musicStyle as mS on bMS.musicStyle_id=mS.id where b.id = ?`,
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
