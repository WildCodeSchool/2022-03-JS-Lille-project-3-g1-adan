const AbstractManager = require("./AbstractManager");

class SearchableManager extends AbstractManager {
  static table = "searchable";

  findMany(search) {
    return this.connection.query(
      `select * from  ${this.table} where haystack like ?`,
      [`%${search}%`]
    );
  }

  // insert(item) {
  //   return this.connection.query(
  //     `insert into ${ItemManager.table} (title) values (?)`,
  //     [item.title]
  //   );
  // }

  // update(item) {
  //   return this.connection.query(
  //     `update ${ItemManager.table} set title = ? where id = ?`,
  //     [item.title, item.id]
  //   );
  // }
}

module.exports = SearchableManager;
