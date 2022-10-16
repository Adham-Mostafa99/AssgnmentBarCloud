import TestData from '../../../TestData';
import {DBManager} from '../Services/DBManager';

const db = new DBManager();

export const initModelRecords = async () => {
  await db.connect();
  if (!db) return;

  const list = await db.select('Model');
  if (list.length > 0) return;

  TestData.forEach(async (item, index) => {
    await db.insert('Model', {
      id: index,
      name: item.name,
      code: item.id,
      type: item.type,
      cost: item.price,
      category: item.category,
      imageLink: item.imageLink,
      additionalDesc: index % 2 === 0 ? 'Additional will be here' : null, // only for trial
    });
  });
};

export const getAllModelsByType = async type => {
  await db.connect();
  if (!db) return;

  return db.select('Model', null, type ? `type like '%${type}%'` : null);
};
