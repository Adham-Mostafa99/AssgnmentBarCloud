import {DBManager} from '../Services/DBManager';

const db = new DBManager();

export const getAllNotesByModelId = async id => {
  await db.connect();
  if (!db) return;

  return db.select('Note', null, `fk_modelId = ${id}`);
};

export const addNote = async (noteDetails, modelId) => {
  db.connect();
  if (!db) return;

  return db.insert('Note', {
    userName: 'Adham',
    details: noteDetails,
    fk_modelId: modelId,
  });
};
