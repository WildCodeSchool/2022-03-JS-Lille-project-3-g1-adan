const AbstractManager = require("./AbstractManager");

class CalendarManager extends AbstractManager {
  static table = "calendar";

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
