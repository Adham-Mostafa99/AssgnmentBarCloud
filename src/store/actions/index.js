import {DBManager} from '../Services/DBManager';
import moment from 'moment';

const db = new DBManager();

export const populateDB = async () => {
  await db.connect();
  if (!db) return;

  await db.createTable('Model', [
    {
      name: 'id',
      dataType: 'integer',
      isNotNull: true,
      options: 'PRIMARY KEY AUTOINCREMENT',
    },
    {name: 'code', dataType: 'text', isNotNull: true},
    {name: 'name', dataType: 'text', isNotNull: true},
    {name: 'type', dataType: 'text', isNotNull: true},
    {name: 'cost', dataType: 'real'},
    {name: 'category', dataType: 'text'},
    {name: 'imageLink', dataType: 'text'},
    {name: 'additionalDesc', dataType: 'text'},
  ]);

  await db.createTable(
    'Note',
    [
      {
        name: 'id',
        dataType: 'integer',
        isNotNull: true,
        options: 'PRIMARY KEY AUTOINCREMENT',
      },
      {name: 'userName', dataType: 'text'},
      {
        name: 'date',
        dataType: 'date',
        options: `DEFAULT (datetime('now','localtime'))`,
      },
      {name: 'details', dataType: 'text'},
      {name: 'fk_modelId', dataType: 'integer'},
    ],
    'CONSTRAINT fk_Model FOREIGN KEY (fk_modelId) REFERENCES Model(id)',
  );
};
