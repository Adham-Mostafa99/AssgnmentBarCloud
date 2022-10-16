import SQLite from 'react-native-sqlite-storage';
import {listToString} from '../../utils/List.Utils';

export class DBManager {
  constructor() {
    this.sqlite = SQLite;
    this.sqlite.DEBUG(true);
    this.sqlite.enablePromise(true);
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase('BarCloud.db', '1.0', 'BarCloud Database', 200000)
        .then(db => {
          this.dbInstance = db;
          resolve(true);
        })
        .catch(error => {
          console.error(error);
          this.dbInstance = null;
          reject(false);
        });
    });
  }

  /**
   *
   * @param {*} tableName
   * @param {*} columns
   */
  createTable(tableName, columns,fk) {
    if (!this.dbInstance) return null;

    let query = '';
    for (var i = 0; i < columns.length; i++) {
      const lastCol = i === columns.length - 1;

      query +=
        '"' +
        columns[i].name +
        '" ' +
        columns[i].dataType +
        ' ' +
        (columns[i].isNotNull ? 'NOT NULL ' : '') +
        (columns[i].options ? columns[i].options : '') +
        (lastCol ? '' : ',');
    }

    if(fk) query+=`, ${fk}`

    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql(`CREATE TABLE IF NOT EXISTS  ${tableName}  (${query});`)
        .then(val => {
          resolve(true);
        })
        .catch(err => {
          console.error(err);
          reject(false);
        });
    });
  }

  /**
   *
   * @param {*} tableName
   * @param {*} data
   */
  insert(tbl, data) {
    return new Promise((resolve, reject) => {
      if (!this.dbInstance) return null;

      const keys = Object.keys(data);
      const values = keys.map(
        key =>
          `${typeof data[key] === 'string' ? `"${data[key]}"` : data[key]}`,
      );

      const query = `INSERT OR REPLACE INTO  ${tbl} (${keys}) values (${values});`;

      this.dbInstance
        .executeSql(query)
        .then(val => {
          resolve(true);
        })
        .catch(err => {
          console.error(err);
          reject(false);
        });
    });
  }

  /**
   *
   * @param {*} tableName
   * @param {*} columns
   * @param {*} where
   */
  select(tbl, columns, where) {
    if (!this.dbInstance) return null;

    const col = listToString(columns);
    const wh = where ? `WHERE ${where}` : '';
    const query = `SELECT ${col ?? '*'} FROM ${tbl} ${wh} ;`;

    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql(query)
        .then(([values]) => {
          const array = [];
          for (let index = 0; index < values.rows.length; index++) {
            const element = values.rows.item(index);
            array.push(element);
          }
          resolve(array);
        })
        .catch(err => {
          console.error(err);
          reject(false);
        });
    });
  }

  /**
   *
   * @param {*} tableName
   * @param {*} where
   */
  deleteTable(tbl, where) {
    if (!this.dbInstance) return null;

    const wh = where ? `WHERE ${where}` : '';
    const query = `DELETE FROM ${tbl} ${wh} ;`;

    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql(query)
        .then(val => {
          resolve(true);
        })
        .catch(err => {
          console.error(err);
          reject(false);
        });
    });
  }
}
