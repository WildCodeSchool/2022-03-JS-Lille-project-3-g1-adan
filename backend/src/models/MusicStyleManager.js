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

  findAll() {
    return this.connection.query(
      `select role, style from  ${this.table} as musicStyle left join artist on artist.id=musicStyle.id`
    );
  }

  findArtistByStyle(id) {
    return this.connection.query(
      `SELECT artist.id, firstname, lastname, artistMusicStyle.musicStyle_id, artist.city, avatar FROM ${this.table} 
      LEFT JOIN artistMusicStyle on musicStyle.id=artistMusicStyle.musicStyle_id 
      LEFT JOIN artist on artistMusicStyle.artist_id=artist.id
      WHERE artistMusicStyle.musicStyle_id= ?`,
      [id]
    );
  }

  findBandByStyle(id) {
    return this.connection.query(
      `SELECT name, city, logo, band.id FROM ${this.table} 
      LEFT JOIN bandMusicStyle on musicStyle.id=bandMusicStyle.musicStyle_id
      LEFT JOIN band on bandMusicStyle.band_id=band.id
      WHERE bandMusicStyle.musicStyle_id= ?`,
      [id]
    );
  }
}

module.exports = MusicStyleManager;
