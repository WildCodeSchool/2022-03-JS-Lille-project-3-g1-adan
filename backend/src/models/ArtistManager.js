const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  static table = "artist";

  insert(artist) {
    return this.connection.query(
      `insert into ${ArtistManager.table} (user_id,firstname,lastname,phone,address,zipcode,city,nickname,avatar,banner,demo,description,cachet) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
        artist.cachet,
      ]
    );
  }

  update(artist) {
    return this.connection.query(
      `update ${ArtistManager.table} set lastname = ?, firstname = ?, city= ?,avatar= ?,banner= ?,demo= ?,description= ?,cachet= ? where id = ? `,
      [
        artist.lastname,
        artist.firstname,
        artist.city,
        artist.avatar,
        artist.banner,
        artist.demo,
        artist.description,
        artist.cachet,
        artist.id,
      ]
    );
  }

  findAll() {
    return this.connection.query(`select role from  ${this.table}`);
  }
}

module.exports = ArtistManager;
