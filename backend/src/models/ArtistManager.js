const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  static table = "artist";

  insert(artist) {
    return this.connection.query(
      `insert into ${ArtistManager.table} (user_id,firstname,lastname,phone,address,zipcode,city,nickname,avatar,banner,demo,description,galleryImg, cachet, instagram, linkedin, status, siren) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        artist.user_id,
        artist.firstname,
        artist.lastname,
        artist.phone,
        artist.address,
        artist.zipcode,
        artist.city,
        artist.nickname,
        artist.avatar,
        artist.banner,
        artist.demo,
        artist.description,
        artist.galleryImg,
        artist.cachet,
        artist.instagram,
        artist.linkedin,
        artist.status,
        artist.siren,
      ]
    );
  }

  updateAllInfo(artist) {
    return this.connection.query(
      `update ${ArtistManager.table} set firstname = ?,lastname = ?,phone = ?,address = ?,zipcode = ?,city = ?,nickname = ?,avatar = ?,banner = ?,demo = ?,description = ?,galleryImg = ?,  cachet = ?, instagram = ?, linkedin = ?, status = ?, siren = ?  where id = ?`,
      [
        artist.firstname,
        artist.lastname,
        artist.phone,
        artist.address,
        artist.zipcode,
        artist.city,
        artist.nickname,
        artist.avatar,
        artist.banner,
        artist.demo,
        artist.description,
        artist.galleryImg,
        artist.cachet,
        artist.instagram,
        artist.linkedin,
        artist.status,
        artist.siren,
        artist.id,
      ]
    );
  }

  update(artist) {
    return this.connection.query(
      `update ${ArtistManager.table} set title = ? where id = ?`,
      [artist.title, artist.id]
    );
  }

  findAll() {
    return this.connection.query(`select role from  ${this.table}`);
  }

  deleteEmployer(id) {
    return this.connection.query(`DELETE from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = ArtistManager;
