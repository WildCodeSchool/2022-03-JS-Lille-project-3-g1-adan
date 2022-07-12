const AbstractManager = require("./AbstractManager");

class CalendarManager extends AbstractManager {
  static table = "calendar";

  insert(calendar) {
    return this.connection.query(
      `insert into ${CalendarManager.table} (id_artist, id_user,date_event) values (?,?, ?)`,
      [calendar.id_artist, calendar.id_user, calendar.date_event]
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
