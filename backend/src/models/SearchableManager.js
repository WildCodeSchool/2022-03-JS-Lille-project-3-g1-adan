const AbstractManager = require("./AbstractManager");

class SearchableManager extends AbstractManager {
  static table = "searchable";

  findMany(search) {
    return this.connection.query(
      `select * from  ${this.table} where haystack like ?`,
      [`%${search}%`]
    );
  }
 }

module.exports = SearchableManager;
