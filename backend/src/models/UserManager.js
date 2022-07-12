const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email,password) values (?,?)`,
      [user.email, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }

  findOneByMail(mail) {
    return this.connection.query(
      `select * from ${UserManager.table} where email=?`,
      [mail]
    );
  }

  findOneById(id) {
    return this.connection.query(
      `SELECT u.email, a.id as artistId, e.id as employerId FROM ${UserManager.table} u left join artist a on u.id=a.user_id left join employer e on u.id=e.user_id where u.id=?`,
      [id]
    );
  }
}

module.exports = UserManager;
