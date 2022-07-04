const AbstractManager = require("./AbstractManager");

class EmployerManager extends AbstractManager {
  static table = "employer";

  insert(employer) {
    return this.connection.query(
      `insert into ${EmployerManager.table} (user_id,firstname,lastname,status) values (?,?,?,?)`,
      [employer.user_id, employer.firstname, employer.lastname, employer.status]
    );
  }

  update(employer) {
    return this.connection.query(
      `update ${EmployerManager.table} set title = ? where id = ?`,
      [employer.title, employer.id]
    );
  }

  findAll() {
    return this.connection.query(`select role from  ${this.table}`);
  }
}

module.exports = EmployerManager;
