const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email,password,employer_id,artist_id) values (?,?,?,?)`,
      [user.email, user.password, user.employer_id, user.artist_id]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }
}

module.exports = UserManager;
