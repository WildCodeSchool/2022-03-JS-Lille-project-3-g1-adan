const AbstractManager = require("./AbstractManager");

class CalendarManager extends AbstractManager {
  static table = "calendar";

  find(id) {
    return this.connection.query(
      `select * from  ${this.table} where artist_id = ?`,
      [id]
    );
  }

  insert(artistId, userId, dateEvent) {
    return this.connection.query(
      `insert into ${CalendarManager.table} ( artist_id, user_id, date_event) values (?,?,?)`,
      [artistId, userId, dateEvent]
    );
  }

  update(calendar) {
    return this.connection.query(
      `update ${CalendarManager.table} set title = ? where id = ?`,
      [calendar.title, calendar.id]
    );
  }
}

module.exports = CalendarManager;
