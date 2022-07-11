const AbstractManager = require("./AbstractManager");

class CalendarManager extends AbstractManager {
  static table = "calendar";

  insert(calendar) {
    return this.connection.query(
      `insert into ${CalendarManager.table} (title) values (?)`,
      [calendar.title]
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
