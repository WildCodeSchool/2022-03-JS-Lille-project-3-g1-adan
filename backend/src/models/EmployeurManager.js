const AbstractManager = require("./AbstractManager");

class EmployerManager extends AbstractManager {
  static table = "employer";

  insert(employer) {
    return this.connection.query(
      `insert into ${EmployerManager.table} (firstname,lastname,phone,address,zipcode,city,compagnyName,compagnyStatus,avatar,banner,demo,descriptionShort,) values (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        employer.firstname,
        employer.lastname,
        employer.phone,
        employer.address,
        employer.zipcode,
        employer.city,
        employer.compagnyName,
        employer.compagnyStatus,
        employer.avatar,
        employer.banner,
        employer.demo,
        employer.descriptionShort,
      ]
    );
  }

  update(employer) {
    return this.connection.query(
      `update ${EmployerManager.table} set title = ? where id = ?`,
      [employer.title, employer.id]
    );
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = EmployerManager;
