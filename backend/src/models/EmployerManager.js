const AbstractManager = require("./AbstractManager");

class EmployerManager extends AbstractManager {
  static table = "employer";

  insert(employer) {
    return this.connection.query(
      `insert into ${EmployerManager.table} (user_id,firstname,lastname,numberSiret,companyName,companyStatus,status) values (?,?,?,?,?,?,?)`,
      [
        employer.user_id,
        employer.firstname,
        employer.lastname,
        employer.numberSiret,
        employer.companyName,
        employer.companyStatus,
        employer.status,
      ]
    );
  }

  update(employer) {
    return this.connection.query(
      `update ${EmployerManager.table} set title = ? where id = ?`,
      [employer.title, employer.id]
    );
  }

  updateAllInfo(employer) {
    return this.connection.query(
      `update ${EmployerManager.table} set firstname = ?, lastname= ?, phone= ?, address= ?, zipcode= ?, city= ?, companyName= ?, companyStatus= ?, avatar= ?, banner= ?,
      descriptionShort= ?, status= ?, numberSiret= ? where id = ?`,
      [
        employer.firstname,
        employer.lastname,
        employer.phone,
        employer.address,
        employer.zipcode,
        employer.city,
        employer.companyName,
        employer.companyStatus,
        employer.avatar,
        employer.banner,
        employer.descriptionShort,
        employer.status,
        employer.numberSiret,
        employer.id,
      ]
    );
  }

  findAll() {
    return this.connection.query(`select role from  ${this.table}`);
  }

  deleteEmployer(id) {
    return this.connection.query(`DELETE from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = EmployerManager;
